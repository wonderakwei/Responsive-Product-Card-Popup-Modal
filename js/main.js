/*=============== CARD POPUP JS ===============*/
const modal = document.querySelectorAll('.modal'),
      cardBtn = document.querySelectorAll('.card__product'),
      modalClose = document.querySelectorAll('.modal__close');

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal');
}

/* Show modal */
cardBtn.forEach((card, i) => {
    card.addEventListener('click', () => {
        activeModal(i);
    });
});

/* Hide modal */
modalClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        modal.forEach(modalItem => {
            modalItem.classList.remove('active-modal');
        });
    });
});

/* Hide modal on background click */
modal.forEach(modalItem => {
    modalItem.addEventListener('click', (e) => {
        if (e.target === modalItem) {
            modalItem.classList.remove('active-modal');
        }
    });
});

/* Don't hide modal on card click (by event propagation) */
modal.forEach(modalItem => {
    modalItem.querySelector('.modal__card').addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
