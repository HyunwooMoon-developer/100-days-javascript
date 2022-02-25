const url = `http://api.icndb.com/jokes/random`;
const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');

btn.addEventListener('click', getJoke);

async function getJoke() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    joke.innerHTML = data.value.joke;
  } catch (err) {
    joke.innerHTML = err.message;
  }
}
