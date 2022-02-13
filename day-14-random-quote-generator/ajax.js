const btn = document.querySelector('.get-quotes');
const number = document.getElementById('number');

btn.addEventListener('click', getQuotes);

function getQuotes(e) {
  e.preventDefault();
  if (number.value.length == 0) {
    return alert('please enter a number');
  } else {
    const https = new XMLHttpRequest();
    https.open('GET', 'https://type.fit/api/quotes', true);
    https.onload = function () {
      if (this.status === 200) {
        const response = shuffle(JSON.parse(this.responseText));

        let output = '';

        for (let i = 0; i < response.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
          <li>Quote : ${response[i].text}</li>
          <li>Auhor : ${response[i].author}</li>
          <hr />
          `;
        }
        document.querySelector('.quotes').innerHTML = output;
      }
    };
    https.send();
  }
}

function shuffle(quotes) {
  let CI = quotes.length,
    tempValue,
    randomIndex;
  //While Elements exist in the array
  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    //Decrease CI by 1
    CI--;
    //Swap the last element with CI
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
