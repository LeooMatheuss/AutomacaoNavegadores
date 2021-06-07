const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.tracing.start({
    path: "trace.pdf",
    categories: ["devtools.timeline"],
  });
  await page.goto(
    "https://comunica.pje.jus.br/consulta?siglaTribunal=TRF1&dataDisponibilizacaoInicio=2021-06-04&dataDisponibilizacaoFim=2021-06-04"
  );

  const stories = await page.$$eval('[class="card fadeIn"]', (anchors) => {
    return anchors.map((anchor) => anchor.textContent).slice(0, 10);
    // document.querySelector('[class="card fadeIn"]').innerText
  });
  console.log(stories);
  await page.tracing.stop();

  debugger;
  await browser.close();
})();
