const fs = require('fs');
const puppeteer = require ('puppeteer');

 (async () => {
 
  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();
  
  await page.goto('https://4pda.to/');
  // Используем метод evaluate, чтобы выполнить пользовательский код на странице
  const titles = await page.evaluate( () => {
    const results = [];
    // Ищем все элементы <h3> с классом "_eYtD2XCVieq6emjKBH3m*
    const items = document.querySelectorAll('h3_eYtD2XCVieq6emjKBH3m');
    // Проходим no всем найденным элементам и добавляем их текст в массив results
    items.forEach(item => {
      results.push(item.innerText);
 });
    // Возвращаем массив результатов
    return results;
  });
  const html = `<ul>\n${titles.map(title => ` <li>${title}</li>\n`).join('')}</ul>`;
  fs.writeFile('index.html', html,err => {
    if (err) throw err;
    console.log('изменения сохранены ');
  });



 

  await browser.close();
})();
async function getPic() {
    const browser = await puppeteer.launch();
    
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5501/index.html');
    await page.screenshot({ path:'screenshot.png'});
    await browser.close();
}
getPic();
