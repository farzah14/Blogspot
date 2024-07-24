exports.homePage = (req, res) => {
	res.render("home", {
		title: "HomePage",
    message: "Home Page"
	});
};
