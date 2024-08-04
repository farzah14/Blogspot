"use strict";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmEmail = document.querySelector("#confirmEmail");
const confirmPassword = document.querySelector("#confirmPassword");

function submitSuccess() {
	if (
		email.value &&
		password.value &&
		confirmEmail.value &&
		confirmPassword.value &&
		email.value === confirmEmail.value &&
		password.value === confirmPassword.value
	) {
		alert("Create Account Success");
	} else {
		alert("Create Account Failed");
	}
}
