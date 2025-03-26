//----modalBtn----//
const modalBtn = document.querySelector('.header-btn-menu');
const modalBtnClose = document.querySelector('.mobile-btn-close');
const modal = document.querySelector('.mobile-menu');

//----modalBtn----//

modalBtn.addEventListener('click', function () {
  modalBtn.classList.toggle('active');
  modal.classList.toggle('active');
});


modalBtnClose.addEventListener('click', function () {
  modalBtn.classList.toggle('active');
  modal.classList.toggle('active');
});

//----modalBtnLinks----//
