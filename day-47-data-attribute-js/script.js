const btn = document.querySelectorAll('.btn');
const text = document.querySelector('.text');

btn.forEach((b) => {
  b.addEventListener('click', (e) => {
    const filter = e.target.dataset.link;

    console.log(filter);
    if (filter === 'home') {
      text.textContent = 'Home';
    } else if (filter == 'about') {
      text.textContent = 'About';
    } else {
      text.textContent = 'Contact';
    }
  });
});
