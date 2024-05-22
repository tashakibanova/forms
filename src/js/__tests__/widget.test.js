import { expect } from '@jest/globals';

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

