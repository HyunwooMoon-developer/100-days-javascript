const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const confirmEl = document.querySelector('.confirm');
const closeEl = document.querySelector('.close');
const title = document.querySelector('.title');
const content = document.querySelector('.content');
const btnOk = document.querySelector('.btn-ok');
const btnCancel = document.querySelector('.btn-cancel');

class ShowConfirm {
  constructor(title, content, ok, cancel) {
    this.title = title;
    this.content = content;
    this.ok = ok;
    this.cancel = cancel;
  }

  trigger(callback) {
    title.textContent = this.title;
    content.textContent = this.content;
    btnOk.innerText = this.ok;
    btnCancel.innerText = this.cancel;

    confirmEl.classList.remove('close-modal');

    closeEl.addEventListener('click', this.closeModal);
    btnCancel.addEventListener('click', this.closeModal);

    btnOk.addEventListener('click', () => {
      callback();
      this.closeModal();
    });
  }

  closeModal() {
    confirmEl.classList.add('close-modal');
  }
}

btn1.addEventListener('click', () => {
  changeBg('red');
});
btn2.addEventListener('click', () => {
  changeBg('purple');
});

const changeBag = new ShowConfirm(
  'Change Background',
  'You are about to change the Background!',
  'Change',
  'Cancel'
);

function changeBg(color) {
  changeBag.trigger(setBg);
  function setBg() {
    document.body.style.backgroundColor = color;
  }
}
