// --Convert Celsius to--
// fah = (x * 1.8) + 32;
// kelvin = x + 273.15;

// -- Convert Fah to --
// celsius = (x - 32) / 1.8;
// kelvin = (x - 32) / 1.8 + 273.15;

// -- Conver Kelvin to --
// fah = (x - 273.15) * 1.8 + 32;
// celsius = parseFloat(x) - 273.15;

const celsius = document.querySelector('.celsius');
const fah = document.querySelector('.fahrenheit');
const kelvin = document.querySelector('.kelvin');
const form = document.querySelector('form');

form.addEventListener('input', convertTemper);

function convertTemper(e) {
  if (e.target.classList.contains('celsius')) {
    let x = e.target.value;
    fah.value = x * 1.8 + 32;
    kelvin.value = x + 273.15;
  }

  if (e.target.classList.contains('fahrenheit')) {
    let x = e.target.value;
    celsius.value = (x - 32) / 1.8;
    kelvin.value = (x - 32) / 1.8 + 273.15;
  }

  if (e.target.classList.contains('kelvin')) {
    let x = e.target.value;
    fah.value = (x - 273.15) * 1.8 + 32;
    celsius.value = parseFloat(x) - 273.15;
  }
}
