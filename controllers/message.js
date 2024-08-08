exports.messagePage = (req, res) => {
	res.render("message", {
		title: "Message",
    create: false
	});
};

exports.createMessage = (req, res) => {
	res.render("message", {
		title: "Message",
    create: true
	});
};
