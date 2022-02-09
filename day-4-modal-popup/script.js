// variables
const modal = document.querySelector('.modal'),
  btn = document.querySelector('.btn'),
  close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

//open modal

function openModal(e) {
  e.preventDefault();
  modal.style.display = 'block';
}
//close modal

function closeModal() {
  modal.style.display = 'none';
}
