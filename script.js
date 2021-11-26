'use strict';

// Get the modal after a click event

const modal = document.querySelector('.modal');

// get the modal's overlay

const overlay = document.querySelector('.overlay');

// get the button of the closing modal

const btnCloseModal = document.querySelector('.close-modal');

// get the button of the open modal

const btnsOpenModal = document.querySelectorAll('.show-modal');

// create a function close modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// create an open modal function
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // create an event listen for the open modal
  btnsOpenModal[i].addEventListener('click', openModal);

  // create an event listen to the close click

  btnCloseModal.addEventListener('click', closeModal);

  // create an event listen for an overlay
  overlay.addEventListener('click', closeModal);

  // create an event listen function for any key press by the user
}

// create an event listen for a key enter

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
