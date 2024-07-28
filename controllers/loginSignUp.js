exports.signUpPage = (req, res)=>{
  res.render("signUp", {
    title:"Sign Up Page",
    text:"Login",
    titleForm:"Sign Up"
  })
}

exports.loginPage = (req, res)=>{
  res.render("login", {
    title:"Login Page",
    text:"Sign Up",
    titleForm:"Login"
  })
}