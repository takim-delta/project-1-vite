//----modalBtn----//
let modalBtn = document.querySelector('.header-btn-menu');
let modalBtnClose = document.querySelector('.header-btn-close');
let modal = document.querySelector('.mobile-menu');

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
