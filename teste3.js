const puppeteer = require("puppeteer");

(async () => {
  const cnjURL =
    "https://comunica.pje.jus.br/consulta?siglaTribunal=TRF1&dataDisponibilizacaoInicio=2021-06-04&dataDisponibilizacaoFim=2021-06-04";

  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto(cnjURL, { waitUntil: "networkidle2" });

  const data = await page.evaluate(() => {
    const Processos = document.querySelector('[class="card fadeIn"]').innerText;

    return {
      // numeroProcesso,
      Processos,

      // registroProcesso,
    };
  });
  console.log(data);

  debugger;

  await page.close();
})();
