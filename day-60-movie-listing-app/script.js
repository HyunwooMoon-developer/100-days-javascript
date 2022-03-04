const apiURL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const searchAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const imgPath = 'https://image.tmdb.org/t/p/w1280';

let moviesDiv = document.querySelector('.movies');
let form = document.querySelector('form');
let input = document.querySelector('.search');

getMovies(apiURL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  displayMoviews(data.results);
}

function displayMoviews(movies) {
  moviesDiv.innerHTML = '';

  movies.forEach((m) => {
    const div = document.createElement('div');
    div.classList.add('movie');
    div.innerHTML = `
    <img src="${imgPath + m.poster_path}" alt="" />

    <div className="details">
      <h2 className="title">${m.title}</h2>
      <p className="rate">Rating: <span className="rating">${
        m.vote_average
      }</span></p>
      <p className="overview">${m.overview}</p>
    </div>
    `;
    moviesDiv.appendChild(div);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  moviesDiv.innerHTML = '';

  const inputVal = input.value;

  if (inputVal) {
    getMovies(searchAPI + inputVal);
    input.value = '';
  }
});
