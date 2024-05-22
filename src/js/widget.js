document.addEventListener('DOMContentLoaded', () => {
    const triggerButton = document.getElementById('triggerButton');
    const popover = document.getElementById('popover');
  
    triggerButton.addEventListener('click', () => {
      // Получаем координаты кнопки
      const buttonRect = triggerButton.getBoundingClientRect();
      
      // Проверяем текущее состояние видимости поповера
      if (popover.style.display === 'none' || popover.style.display === '') {
        // Показываем поповер
        popover.style.display = 'block';
        
        // Получаем размеры поповера
        const popoverRect = popover.getBoundingClientRect();
        
        // Центрируем поповер по горизонтали относительно кнопки
        popover.style.left = `${buttonRect.left + (buttonRect.width / 2) - (popoverRect.width / 2)}px`;
        // Располагаем поповер сверху кнопки
        popover.style.top = `${buttonRect.top - popoverRect.height - 10}px`; // 10px - отступ сверху
      } else {
        // Скрываем поповер
        popover.style.display = 'none';
      }
    });
  
    // Скрытие поповера при клике вне его области
    document.addEventListener('click', (event) => {
      if (!popover.contains(event.target) && !triggerButton.contains(event.target)) {
        popover.style.display = 'none';
      }
    });
  });