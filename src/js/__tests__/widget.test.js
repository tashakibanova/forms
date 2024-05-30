import '../widget.js';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Загружаем страницу
  await page.goto('http://localhost:8080');

  // Ожидаем загрузки страницы
  await page.waitForSelector('.triggerButton');

  // Нажимаем на кнопку, чтобы показать поповер
  await page.click('.triggerButton');
  await page.waitForSelector('.popover.show');

  // Проверяем, что поповер отображается
  const isPopoverVisible = await page.evaluate(() => {
    const popover = document.querySelector('.popover');
    return popover && popover.classList.contains('show');
  });
  expect(isPopoverVisible).toBe(true);

  await browser.close();
})();
