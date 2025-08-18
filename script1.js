
// Login form handler

const loginForm = document.getElementById('login-form');

function validateForm(event) {
  event.preventDefault();
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const usernameError = document.getElementById('username-error')
  const passwordError = document.getElementById('password-error')
  let isValid = true;


  if (!username.checkValidity()) {
    event.preventDefault();
    usernameError.textContent = username.validationMessage;
    makeInvalid(loginForm.elements["username"]);
    isValid = false;
  } else {
    console.log("username pass", username.checkValidity())
    makeValid(loginForm.elements["username"]);
  }

  if (!password.checkValidity()) {
    event.preventDefault();
    passwordError.textContent = password.validationMessage
    makeInvalid(loginForm.elements["password"]);
    isValid = false;
  } else {
    console.log("password pass", password.checkValidity())
    makeValid(loginForm.elements["password"]);
  }

  if (password.value.length < 3) {
    event.preventDefault();
    passwordError.textContent = "Password must be at least 3 characters long";
    makeInvalid(loginForm.elements["password"]);
    isValid = false;
  } else {
    console.log("password length pass", password.checkValidity())
    makeValid(loginForm.elements["password"]);
  }

  if (isValid) {

    const loader = document.getElementById('loader');
    //     // If the form is valid, proceed with login
    //     // Show loader
    loader.style.display = 'block';
    setTimeout(function () {
      alert("Login successful!");
      loader.style.display = 'none';
    }, 2000)

  }

}

loginForm.addEventListener('submit', validateForm);

function makeValid(el) {
  el.classList.remove("is-invalid");
  el.classList.add("is-valid");
}

function makeInvalid(el) {
  el.classList.add("is-invalid");
  el.classList.remove("is-valid");
}