const menuMobile = document.querySelector('.header__menu-mobile'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.menu__close'),
        modal = document.querySelector('.modal'),
        buttonMenu = document.querySelector('.button_menu'),
        closeModal = document.querySelector('.modal__close'),
        buttonBlack = document.querySelector('.button_black'),
        buttonWhite = document.querySelector('.button_white'),
        buttonConstruction = document.querySelector('.reliability__construction-button'),
        buttonCreated1 = document.querySelector('.created__button_1'),
        buttonCreated2 = document.querySelector('.created__button_2'),
        buttonHow1 = document.querySelector('.how__button_1'),
        buttonHow2 = document.querySelector('.how__button_2'),
        buttonOptimization1 = document.querySelector('.optimization__button_1'),
        buttonOptimization2 = document.querySelector('.optimization__button_2');


        
menuMobile.addEventListener('click', () => {
    menu.classList.add('menu-visible');
    overlay.classList.add('overlay-visible');
});

menu.addEventListener('click', () => {
    modal.classList.remove('modal-visible');
    menu.classList.remove('menu-visible');
    overlay.classList.remove('overlay-visible');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu-visible');
    overlay.classList.remove('overlay-visible');
});

overlay.addEventListener('click', () => {
    modal.classList.remove('modal-visible');
    menu.classList.remove('menu-visible');
    overlay.classList.remove('overlay-visible');
});

buttonMenu.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

buttonBlack.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

buttonWhite.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

buttonConstruction.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

buttonCreated1.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

buttonCreated2.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

buttonHow1.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

buttonHow2.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

buttonOptimization1.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

buttonOptimization2.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    overlay.classList.add('overlay-visible');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal-visible');
    overlay.classList.remove('overlay-visible');
});

