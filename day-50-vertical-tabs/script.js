const tabLink = document.getElementsByClassName('tab-link');
const contents = document.querySelectorAll('.tab-content');

for (let i = 0; i < tabLink.length; i++) {
  tabLink[i].addEventListener('click', function (e) {
    const current = document.getElementsByClassName('active');
    console.log('current', current);
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';

    const filter = e.target.dataset.filter;

    contents.forEach((c) => {
      if (c.classList.contains(filter)) {
        c.style.display = 'block';
      } else {
        c.style.display = 'none';
      }
    });
  });
}
