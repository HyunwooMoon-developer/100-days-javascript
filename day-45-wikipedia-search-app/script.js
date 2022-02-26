const search = document.querySelector('input');
const form = document.querySelector('form');
const searchResult = document.querySelector('.results');
const errorMsg = document.querySelector('.alert');
const line = document.querySelector('hr');

const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchValue = search.value;
  if (searchValue === '') {
    errorMessage('Please Enter a Search Term');
  } else {
    getResult(searchValue);
  }
});

function errorMessage(err) {
  errorMsg.style.display = 'block';
  line.style.display = 'block';
  errorMsg.textContent = err;
}

async function getResult(val) {
  const res = await fetch(url + val);
  const result = await res.json();

  if (result.query.length == 0) {
    errorMessage('Please Enter a Search Term');
  } else {
    displayResult(result);
  }
}

function displayResult(result) {
  line.style.display = 'block';
  let output = '';
  result.query.search.forEach((r) => {
    let resultURL = `https://en.wikipedia.org/?curid=${r.pageid}`;
    output += `
    <div className="result p-2">
    <a href="${resultURL}" target="_blank" rel="noopener" className="h3 fw-bold">
    ${r.title}
    </a>
    <br />
    <a href="${resultURL}" target="_blank" rel="noopener" className="fs-5 text-success">
    ${resultURL}
    </a>
    <p className="fs-5">${r.snippet}</p>
    </div>`;
    searchResult.innerHTML = output;
  });
}
