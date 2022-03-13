const formItems = document.getElementsByClassName('form-item');
const button = document.getElementsByClassName('btn');
const steps = document.getElementsByClassName('step');

let current = 0;
formItems[current].style.display = 'block';

if (current == 0) {
  button[0].style.display = 'none';
  steps[0].style.backgroundColor = '#1e9df7';
}

button[1].addEventListener('click', () => {
  current++;
  const prev = current - 1;

  if (current && current < 4) {
    button[0].style.display = 'inline-block';
    formItems[current].style.display = 'block';
    formItems[prev].style.display = 'none';
    steps[current].style.backgroundColor = '#1e9df7';

    if (current == 3) {
      button[1].innerHTML = 'Submit';
    }
  } else {
    if (current > 3) {
      alert('Form Submitted Successfully');
    }
  }
});

button[0].addEventListener('click', () => {
  if (current > 0) {
    current--;
    const next = current + 1;
    formItems[current].style.display = 'block';
    formItems[next].style.display = 'none';
    steps[next].style.backgroundColor = '#cfd2d4';

    if (current == 0) {
      button[0].style.display = 'none';
    }
    if (current < 3) {
      button[1].innerHTML = 'Next';
    }
  }
});
