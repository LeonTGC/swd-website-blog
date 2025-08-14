const loginForm = document.getElementById('login-form');

function validateForm(event) {
  event.preventDefault();
  alert("Event listener is working");
}




loginForm.addEventListener('submit', validateForm);