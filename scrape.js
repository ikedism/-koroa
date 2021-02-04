const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const scrape = async () => {
  const res = await fetch('http://www.pref.kagoshima.jp/ae06/kenko-fukushi/kenko-iryo/kansen/kansensho/coronavirus.html#kokunai');
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const nodes = document.querySelectorAll('#tmp_contents > div:nth-child(50) > div > div > table > tbody > tr:nth-child(204) > td');
  const tokyoWeathers = Array.from(nodes).map((td) => td.textContent.trim());
  console.log(tokyoWeathers);
};
scrape();