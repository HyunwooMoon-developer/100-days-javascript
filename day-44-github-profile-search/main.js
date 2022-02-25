import * as v from './js/variable.js';
import { getUser, errorMessage } from './js/function.js';

v.form.addEventListener('submit', (e) => {
  e.preventDefault();
  let user = v.search.value.split(' ').join('');

  if (user === '') {
    errorMessage('Input cannot be blank');
    console.log('blank');
  } else {
    getUser(user);
    v.search.value = '';
  }
});
