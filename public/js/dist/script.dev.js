"use strict";

var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmEmail = document.querySelector("#confirmEmail");
var confirmPassword = document.querySelector("#confirmPassword");

function submitSuccess() {
  if (email.value && password.value && confirmEmail.value && confirmPassword.value && email.value === confirmEmail.value && password.value === confirmPassword.value) {
    alert("Create Account Success");
  } else {
    alert("Create Account Failed");
  }
}