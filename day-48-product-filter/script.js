const btn = document.querySelectorAll('.btn');
const storeProduct = document.querySelectorAll('.store-product');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function (e) {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';

    const filter = e.target.dataset.filter;

    storeProduct.forEach((p) => {
      if (filter === 'all') {
        p.style.display = 'block';
      } else if (p.classList.contains(filter)) {
        p.style.display = 'block';
      } else {
        p.style.display = 'none';
      }
    });
  });
}

const search = document.getElementById('search');
const productName = document.querySelectorAll('.product-details h2');
const noResult = document.querySelector('.no-result');

search.addEventListener('keyup', filterProducts);

function filterProducts(e) {
  const text = e.target.value.toLowerCase();

  productName.forEach((p) => {
    const item = p.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      p.parentElement.parentElement.style.display = 'block';
      noResult.style.display = 'none';
    } else {
      p.parentElement.parentElement.style.display = 'none';
      noResult.style.display = 'block';
    }
  });
}
