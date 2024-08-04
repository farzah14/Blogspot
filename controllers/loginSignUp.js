const accountUser = require("../models/accountUser");
const data = require("../data/account.json");

exports.signUpPage = (req, res) => {
	res.render("signUp", {
		title: "Sign Up Page",
		text: "Login",
		titleForm: "Sign Up",
	});
};

exports.postSignUp = (req, res) => {
	const { email, password } = req.body;
	const { confirmEmail, confirmPassword } = req.body;

	if (email === confirmEmail && password === confirmPassword) {
		const getData = new accountUser(email, password);
		getData.saveAccount();
		res.redirect("/join/signup");
	} else {
		const getData = new accountUser("", "");
		getData.saveAccount();
		res.redirect("/join/signup");
	}
};

exports.loginPage = (req, res) => {
	res.render("login", {
		title: "Login Page",
		text: "Sign Up",
		titleForm: "Login",
	});
};

exports.postLogin = (req, res) => {
	const { email, password } = req.body;
	const userData = data.find(
		(user) => email === user.email && password === user.password
	);

  userData ? console.log("Login Success") : console.log("Login Failed")

	res.redirect("/join/login");
};
