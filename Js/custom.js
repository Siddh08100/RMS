document.addEventListener("DOMContentLoaded", function () {
  loadComponent("sidebar", "sidebar.html");
  loadComponent("MainContent", "menu.html");// change here main dashboard
  loadComponent("navbar", "navbar.html");
});

function loadComponent(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

function loadContent(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("MainContent").innerHTML = data;
    });
}

function validateEmailInput() {
  const emailInput = document.getElementById("email").value;
  const feedbackElement = document.querySelector("#email-error-txt");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    feedbackElement.textContent = "";
  } else {
    feedbackElement.textContent = "Please enter a valid email address.";
  }
}

function Try() {
  const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password");
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  console.log(togglePassword);
  console.log(password);

  if (type === "password") {
    togglePassword.setAttribute("class", "fa fa-eye-slash");
  } else {
    togglePassword.setAttribute("class", "fa fa-eye");
  }

  password.setAttribute("type", type);
}

function newPassword() {
  const togglePassword = document.getElementById("newPasswordToggle");
  const password = document.getElementById("newPassword");
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  if (type === "password") {
    togglePassword.setAttribute("class", "fa fa-eye-slash");
  } else {
    togglePassword.setAttribute("class", "fa fa-eye");
  }

  password.setAttribute("type", type);
}

function confirmNewPassword() {
  const togglePassword = document.getElementById("confirmNewPasswordToggle");
  const password = document.getElementById("confirmNewPassword");
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  if (type === "password") {
    togglePassword.setAttribute("class", "fa fa-eye-slash");
  } else {
    togglePassword.setAttribute("class", "fa fa-eye");
  }

  password.setAttribute("type", type);
}

function validateAll() {
  const emailInput = document.getElementById("email").value;
  const emailError = document.getElementById("email-error-txt");

  const passInput = document.getElementById("password").value;
  const passError = document.getElementById("pass-error-txt");

  if (passInput !== "") {
    passError.innerHTML = "";
  } else {
    passError.innerHTML = "password is required";
  }

  if (emailInput !== "") {
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML = "Email is required";
  }
}
