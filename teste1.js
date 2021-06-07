const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto("https://comunica.pje.jus.br/");

  await page.waitForSelector('a[class="state ng-star-inserted"]');
  await page.waitForTimeout(3000);
  await page.click('a[class="state ng-star-inserted"]');
  await page.waitForTimeout(3000);
  await page.click(".ui-button");
  await page.keyboard.press("Enter");

  debugger;

  //await browser.close();
})();
