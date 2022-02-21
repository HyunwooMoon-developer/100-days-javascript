console.log(window);

//console.log(Object.getOwnPropertyNames(window));

// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

window.localStorage.setItem('firstName', 'Hyunwoo');
localStorage.setItem('lastName', 'Moon');

const person = {
  fullName: 'Hyunwoo Moon',
  location: 'USA',
};

localStorage.setItem('user', JSON.stringify(person));

const fruits = ['Apple', 'Banana', 'Orance'];

localStorage.setItem('fruit', JSON.stringify(fruits));

console.log(localStorage.getItem('firstName'));

localStorage.removeItem('fruits');

localStorage.clear();

localStorage.setItem('Name', 'Hyunwoo Moon');
localStorage.setItem('age', '31');

console.log(localStorage.key(0));
