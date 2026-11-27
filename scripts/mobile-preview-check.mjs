import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const url = 'http://127.0.0.1:4173';
await mkdir('mobile-preview-results', { recursive: true });
for (let i=0;i<40;i++) {
  try { if ((await fetch(url)).ok) break; } catch {}
  if (i===39) throw new Error('Preview did not start');
  await new Promise(r=>setTimeout(r,500));
}
const browser = await chromium.launch();
const results = [];
const failures = [];
try {
  for (const width of [360,390,430]) {
    const page = await browser.newPage({ viewport: { width, height: 844 }, isMobile: true, hasTouch: true });
    // Prevent writes and external requests, including the production review API.
    await page.route('**/*', route => route.request().url().startsWith(url+'/') && ['GET','HEAD'].includes(route.request().method()) ? route.continue() : route.abort());
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      await page.locator('#services').waitFor();
      await page.evaluate(()=>document.fonts.ready);
      await page.getByText('Loading customer reviews...').waitFor({state:'hidden'});
      const before = await page.evaluate(()=>({height:document.documentElement.scrollHeight,width:document.documentElement.scrollWidth,viewport:innerWidth}));
      await page.screenshot({path:'mobile-preview-results/home-'+width+'.png',fullPage:true});
      assert.ok(before.width <= before.viewport+1,'Horizontal overflow');
      const reviewForm=page.locator('#reviews details.home-review-form');
      assert.equal(await reviewForm.getAttribute('open'),null);
      await reviewForm.locator('summary').click();
      assert.ok(await reviewForm.locator('form').isVisible());
      await reviewForm.locator('summary').click();
      assert.equal(await reviewForm.getAttribute('open'),null);
      const prices=page.locator('#services details').filter({has:page.getByText('View prices',{exact:true})});
      assert.equal(await prices.count(),6);
      const first=prices.first();
      assert.equal(await first.getAttribute('open'),null);
      await first.locator('summary').click();
      assert.notEqual(await first.getAttribute('open'),null);
      const expanded=await page.evaluate(()=>document.documentElement.scrollHeight);
      await first.locator('summary').click();
      assert.equal(await first.getAttribute('open'),null);
      assert.ok(await page.locator('#home a[href^="tel:+447777449931"]').count());
      assert.ok(await page.locator('#home a[href^="https://wa.me/447777449931"]').count());
      results.push({width,height:before.height,screenHeights:Math.round(before.height/844*10)/10,expandedHeight:expanded});
      assert.ok(before.height <= 844*7.5, 'Homepage exceeds 7.5 screen heights: '+before.height);
    } catch(error) { failures.push({width,error:String(error)}); }
    finally { await page.close(); }
  }

  // Compare actual desktop/tablet geometry, not just equal outer card heights.
  for (const width of [768, 1024, 1120, 1280, 1440, 1920]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.route('**/*', route => route.request().url().startsWith(url+'/') && ['GET','HEAD'].includes(route.request().method()) ? route.continue() : route.abort());
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      const cards = page.locator('#services article[role="listitem"]');
      await cards.first().waitFor();
      await page.evaluate(()=>document.fonts.ready);
      assert.equal(await cards.count(), 6);
      const measure = () => cards.evaluateAll(elements => elements.map(card => {
        const rect = selector => card.querySelector(selector).getBoundingClientRect();
        return { top: card.getBoundingClientRect().top, bottom: card.getBoundingClientRect().bottom,
          title: rect('h3').top, description: rect('h3 + p').top,
          image: rect('img').top, imageBottom: rect('img').bottom,
          prices: rect('summary').top,
          details: rect('a:first-child').top, detailsBottom: rect('a:first-child').bottom,
          quote: rect('a:last-child').top, quoteBottom: rect('a:last-child').bottom };
      }));
      const checkRows = data => {
        const count = width >= 1120 ? 3 : 2;
        for (let offset = 0; offset < data.length; offset += count) {
          const row = data.slice(offset, offset + count);
          for (const key of Object.keys(row[0])) {
            const values = row.map(card => card[key]);
            assert.ok(Math.max(...values) - Math.min(...values) <= 1,
              width + 'px row ' + (offset / count + 1) + ': ' + key + ' misaligned: ' + values.join(', '));
          }
        }
      };
      const closed = await measure();
      checkRows(closed);
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth+1), 'Desktop horizontal overflow');
      await page.locator('#services').screenshot({path:'mobile-preview-results/services-'+width+'.png'});
      for (const index of [0, 3]) {
        const toggle = cards.nth(index).locator('summary');
        await toggle.click();
        checkRows(await measure());
        await toggle.click();
        checkRows(await measure());
      }
      results.push({width, desktopAlignment:'passed', cards:closed});
    } catch(error) { failures.push({width,error:String(error)}); }
    finally { await page.close(); }
  }

  // Audit every visible contact anchor on public routes. Intercept trusted
  // browser clicks at document level: no WhatsApp message or phone call leaves the test.
  const publicRoutes = ['/', '/carpet-cleaning-winchester', '/rug-cleaning-winchester',
    '/upholstery-cleaning-winchester', '/mattress-cleaning-winchester',
    '/steam-cleaning-winchester', '/oven-cleaning-winchester', '/more-about-robigo',
    '/commercial-cleaning-winchester', '/business', '/business/offices',
    '/business/hospitality', '/business/accommodation', '/business/rental-properties'];
  const contactSelector = 'a[href^="tel:"], a[href*="wa.me"], a[href*="whatsapp.com"], a[href^="whatsapp:"]';
  for (const width of [390, 1440]) {
    const page = await browser.newPage({viewport:{width,height:844},isMobile:width===390,hasTouch:width===390,reducedMotion:'reduce'});
    await page.context().route('**/*', route => route.request().url().startsWith(url+'/') && ['GET','HEAD'].includes(route.request().method()) ? route.continue() : route.abort());
    try {
      for (const path of publicRoutes) {
        await page.goto(url+path, {waitUntil:'domcontentloaded'});
        await page.locator('footer#contact a[href="tel:+447777449931"]').waitFor();
        await page.evaluate(()=>document.fonts.ready);
        await page.evaluate(() => {
          window.__contactClicks = [];
          document.addEventListener('click', event => {
            const anchor = event.target instanceof Element && event.target.closest('a[href]');
            if (!anchor || !/^(tel:|https:\/\/wa\.me\/)/.test(anchor.href)) return;
            window.__contactClicks.push({href:anchor.getAttribute('href'),trusted:event.isTrusted,alreadyPrevented:event.defaultPrevented});
            event.preventDefault();
          });
        });
        const checked = [];
        const checkLink = async link => {
          if (!(await link.isVisible())) return;
          const href = await link.getAttribute('href');
          assert.ok(href, 'Empty contact URL');
          if (href.startsWith('tel:')) assert.equal(href,'tel:+447777449931');
          else {
            const parsed = new URL(href);
            assert.equal(parsed.origin,'https://wa.me');
            assert.equal(parsed.pathname,'/447777449931');
            assert.ok(parsed.searchParams.get('text')?.trim(), 'Missing prefilled message');
            assert.ok(!parsed.searchParams.get('text').includes('%20'), 'Double encoded message');
            if (await link.getAttribute('target') === '_blank')
              assert.ok((await link.getAttribute('rel')??'').includes('noopener'));
          }
          assert.equal(await link.locator('button, a, input, select, textarea').count(),0,'Nested interactive control');
          await link.click({timeout:5000});
          const event = await page.evaluate(()=>window.__contactClicks.pop());
          assert.equal(event?.href,href,'Click did not reach contact anchor');
          assert.equal(event.trusted,true);
          assert.equal(event.alreadyPrevented,false,'Site blocked default navigation');
          checked.push({href,label:(await link.innerText()).trim()});
        };
        // Fixed WhatsApp button may appear after scrolling on commercial pages.
        for (const link of await page.locator(contactSelector+':not(.floating-whatsapp)').all()) {
          if (await link.evaluate(el=>el.classList.contains('floating-whatsapp'))) continue;
          await checkLink(link);
        }
        await page.evaluate(()=>window.scrollTo(0,document.documentElement.scrollHeight));
        const floating=page.locator('a.floating-whatsapp');
        if (width===1440 && path!=='/') {
          await floating.waitFor({state:'visible',timeout:5000});
          await checkLink(floating);
        }
        assert.ok(checked.some(x=>x.href.startsWith('tel:')), 'No accessible phone link on '+path);
        assert.ok(checked.some(x=>x.href.startsWith('https://wa.me/')), 'No accessible WhatsApp link on '+path);
        if (path==='/') {
          const cards = page.locator('#services article[role="listitem"]');
          assert.equal(await cards.count(),6);
          for (const card of await cards.all()) {
            const title=await card.locator('h3').innerText();
            const href=await card.locator('a[href^="https://wa.me/"]').getAttribute('href');
            assert.ok(new URL(href).searchParams.get('text').includes(title), 'Wrong service quote: '+title);
          }
        }
        if (path==='/business' || path==='/commercial-cleaning-winchester') {
          for (const sector of ['offices','hospitality','accommodation','rental-properties'])
            assert.equal(await page.locator('a[href="/business/'+sector+'"]').count(),1,'Broken sector link');
        }
        results.push({width,path,contactLinks:checked.length,contactCheck:'passed'});
      }
    } catch(error) { failures.push({width,contactCheck:'failed',error:String(error)}); }
    finally { await page.close(); }
  }
} finally {
  await browser.close();
  await writeFile('mobile-preview-results/report.json',JSON.stringify({results,failures},null,2));
  console.log(JSON.stringify({results,failures},null,2));
}
assert.equal(failures.length,0,'Mobile checks failed');
