const btn = document.getElementById('btn');
btn.addEventListener('click', getUser);

function getUser(e) {
  e.preventDefault();

  fetch(`users.json`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = '';
      data.forEach(
        (user) =>
          (output += `
      <hr />
      <ul>
      <li>ID : ${user.id}</li>
      <li>Name: ${user.name}</li>
      <li>Email: ${user.email}</li>
      <li>Age: ${user.age}</li>
      </ul>
      `)
      );
      document.getElementById('users').innerHTML = output;
    });
}
