const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

const generateNumber = () => {
  //generate number btn 1 and 10
  const rand = Math.floor(Math.random() * 10 + 1);

  number.innerHTML = rand;
};

btn.addEventListener('click', generateNumber);

generateNumber();
