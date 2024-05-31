const puppeteer = require('puppeteer');

describe('Popover Interaction', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(`file://${__dirname}/../../index.html`);

    // Инициализируем popover
    await page.evaluate(() => {
      const { Popover } = bootstrap;
      const triggerButton = document.querySelector('.triggerButton');
      new Popover(triggerButton);
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  test('should show and hide popover on button click', async () => {
    const button = await page.$('.triggerButton');

    // Кликуем по кнопке и ждем появления поповера
    await button.click();
    await delay(1000); // Используем delay для ожидания
    await page.waitForSelector('.popover', { timeout: 5000 });

    let popoverVisible = await page.$('.popover') !== null;
    expect(popoverVisible).toBe(true);

    // Еще раз кликуем по кнопке и ждем исчезновения поповера
    await button.click();
    await delay(1000); // И здесь тоже используем delay
    await page.waitForSelector('.popover', { hidden: true, timeout: 5000 });

    popoverVisible = await page.$('.popover') === null;
    expect(popoverVisible).toBe(true);
  });
});