/* 
\d matches any digit, equivalent to [0-9]
\D matches any character that’s not a digit, equivalent to [^0-9]
\w matches any alphanumeric character (plus underscore), equivalent to [A-Za-z_0-9]
\W matches any non-alphanumeric character, anything except [^A-Za-z_0-9]
\s matches any whitespace character: spaces, tabs, newlines and Unicode spaces
\S matches any character that’s not a whitespace
\0 matches null
\n matches a newline character
\t matches a tab character
\uXXXX matches a unicode character with code XXXX (requires the u flag)
. matches any character that is not a newline char (e.g. \n) (unless you use the s flag, explained later on)
[^] matches any character, including newline characters. It’s useful on multiline strings
 */
const cardNumber = document.querySelector('#number');
const cardValidity = document.querySelector('#valid');
const cardCvv = document.querySelector('#cvv');

cardNumber.addEventListener('input', formatCardNumber);
cardValidity.addEventListener('input', formatCardValidity);
cardCvv.addEventListener('input', formatCvv);

function formatCardNumber(e) {
  cardNumber.maxLength = '19';
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, '')
    .replace(/[^\da-z]/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
  if (cardNumber.value.length == 19) {
    formatCardValidity();
  }
}

function formatCardValidity(e) {
  cardValidity.focus();
  cardValidity.maxLength = '5';
  if (cardValidity.value.length < 5) {
    cardValidity.value = cardValidity.value
      .replace(/[^\dA-Z]/g, '')
      .replace(/[^\da-z]/g, '')
      .replace(/(.{2})/g, '$1/')
      .trim();
  }
  if (cardValidity.value.length == 5) {
    formatCvv();
  }
}

function formatCvv() {
  cardCvv.focus();
  cardCvv.maxLength = '3';
  cardCvv.value = cardCvv.value
    .replace(/[^\dA-Z]/g, '')
    .replace(/[^\da-z]/g, '')
    .trim();
}
