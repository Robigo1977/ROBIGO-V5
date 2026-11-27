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
} finally {
  await browser.close();
  await writeFile('mobile-preview-results/report.json',JSON.stringify({results,failures},null,2));
  console.log(JSON.stringify({results,failures},null,2));
}
assert.equal(failures.length,0,'Mobile checks failed');
