const User = require("../models/user.js")

module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signUp = async (req, res, next) => {  // Added next parameter
    try {
        let { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const registerUser = await User.register(newUser, password);
        req.login(registerUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust!");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        return res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async(req, res) => {
    req.flash("success", "Welcome Back!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logOut = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "Logged Out!");
        res.redirect("/listings");
    })
}