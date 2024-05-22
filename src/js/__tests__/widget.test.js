import { jest, expect } from '@jest/globals';

// Функция для имитации клика на кнопку
function clickButton() {
  const triggerButton = document.getElementById('triggerButton');
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  });
  triggerButton.dispatchEvent(event);
}

// Функция для проверки, что поповер отображается
function checkPopoverDisplay() {
  const popover = document.getElementById('popover');
  expect(popover.style.display).toBe('block');
}

// Функция для проверки, что поповер скрывается
function checkPopoverHidden() {
  const popover = document.getElementById('popover');
  expect(popover.style.display).toBe('none');
}

// Тест на отображение поповера
test('Popover should be displayed after clicking on the button', () => {
  clickButton();
  checkPopoverDisplay();
});

// Тест на скрытие поповера
test('Popover should be hidden when clicking outside of it', () => {
  clickButton();
  checkPopoverDisplay();
  // Здесь можно имитировать клик вне поповера
  clickButton();
  checkPopoverHidden();
});