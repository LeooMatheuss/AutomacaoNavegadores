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
    const numeroProcesso = document.querySelector(
      'span[class="numero-unico-formatado"]'
    ).innerText;

    const registroProcesso = document.querySelector(
      '[class="card-content main"]'
    ).textContent;

    const processoCard_Informacoes = document.querySelector(
      '[class="tab_panel2 ng-star-inserted"]'
    ).textContent;
    return {
      numeroProcesso,
      registroProcesso,
      processoCard_Informacoes,
    };
  });
  console.log(data);

  debugger;

  await page.close();
})();
