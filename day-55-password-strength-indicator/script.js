let state;
let password = document.getElementById('password');
let passwordStrength = document.getElementById('password-strength');
let lowUpperCase = document.querySelector('.low-upper-case i');
let number = document.querySelector('.number i');
let specialChar = document.querySelector('.special-char i');
let eightChar = document.querySelector('.eight-char i');
let showPassword = document.querySelector('.show-pass');
let eyeIcon = document.querySelector('#eye');

showPassword.addEventListener('click', toggle);
eyeIcon.addEventListener('click', toggleEye);
password.addEventListener('keyup', () => {
  let pass = password.value;
  checkStrength(pass);
});

function toggle() {
  if (state) {
    password.setAttribute('type', 'password');
    state = false;
  } else {
    password.setAttribute('type', 'text');
    state = true;
  }
}

function toggleEye() {
  eyeIcon.classList.toggle('fa-eye-slash');
}

function checkStrength(password) {
  let strength = 0;

  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    addCheck(lowUpperCase);
  } else {
    removeCheck(lowUpperCase);
  }

  if (password.match(/([0-9])/)) {
    strength += 1;
    addCheck(number);
  } else {
    removeCheck(number);
  }

  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    strength += 1;
    addCheck(specialChar);
  } else {
    removeCheck(specialChar);
  }

  if (password.length > 7) {
    strength += 1;
    addCheck(eightChar);
  } else {
    removeCheck(eightChar);
  }

  if (strength == 1) {
    removePassStrength();
    passwordStrength.classList.add('pb-danger');
    passwordStrength.style = 'width: 25%';
  } else if (strength == 2) {
    removePassStrength();
    passwordStrength.classList.add('pb-warning');
    passwordStrength.style = 'width: 50%';
  } else if (strength == 3) {
    removePassStrength();
    passwordStrength.classList.add('pb-primary');
    passwordStrength.style = 'width: 75%';
  } else if (strength == 4) {
    removePassStrength();
    passwordStrength.classList.add('pb-success');
    passwordStrength.style = 'width: 100%';
  }
}

function removePassStrength() {
  passwordStrength.classList.remove(
    'pb-danger',
    'pb-warning',
    'pb-primary',
    'pb-success'
  );
}

function addCheck(charRequired) {
  charRequired.classList.remove('fa-circle');
  charRequired.classList.add('fa-check');
}

function removeCheck(charRequired) {
  charRequired.classList.add('fa-circle');
  charRequired.classList.remove('fa-check');
}
