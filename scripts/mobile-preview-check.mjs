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
} finally {
  await browser.close();
  await writeFile('mobile-preview-results/report.json',JSON.stringify({results,failures},null,2));
  console.log(JSON.stringify({results,failures},null,2));
}
assert.equal(failures.length,0,'Mobile checks failed');
