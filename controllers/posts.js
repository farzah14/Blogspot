exports.postsPage = (req, res) => {
	res.render("posts", {
		title: "Post",
		message: "Posts Page",
	});
};
