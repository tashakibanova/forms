export default document.addEventListener('DOMContentLoaded', function() {
  var triggerButton = document.querySelector('.triggerButton');
  
  var popover = new bootstrap.Popover(triggerButton, {
    trigger: 'manual',
    placement: 'top',  // Устанавливаем выравнивание поповера сверху
    html: true,
    title: triggerButton.getAttribute('data-bs-title'),
    content: triggerButton.getAttribute('data-bs-content')
  });

  // Показать/скрыть поповер при клике на кнопке
  triggerButton.addEventListener('click', function(e) {
    e.stopPropagation();
    if (popover._element.classList.contains('show')) {
      popover.hide();
    } else {
      popover.show();
    }
  });

  // Скрытие поповера при клике вне его области
  document.addEventListener('click', function(e) {
    if (!triggerButton.contains(e.target) && !document.querySelector('.popover.show')) {
      popover.hide();
    }
  });
});


