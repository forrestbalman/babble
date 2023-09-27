const modal = document.querySelector('.modal'),
modalClose = document.querySelector('.modal-close'),
modalBackground = document.querySelector('.modal-background'),
button = document.querySelector('.is-info');

button.addEventListener('click', () => {
    modal.classList.toggle('is-active');
});

modalClose.addEventListener('click', () => {
    modal.classList.toggle('is-active');
});

modalBackground.addEventListener('click', () => {
    modal.classList.toggle('is-active');
});

