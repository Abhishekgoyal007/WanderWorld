const User = require('../models/user.js');

module.exports.showSignUpForm = (req, res)=>{
    res.render('./users/signUp.ejs')
}

module.exports.CreateUser = async(req,res)=>{
    try{let {username, email, password} = req.body;
    // save user to database
    const newUser = new User({username, email});
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err)=>{
        if(err){
            return next(err)
        }
        req.flash("success","Welcome to WanderLust!");
        res.redirect('/listings');
    })}catch(err){
        req.flash("error",err.message);
        res.redirect('/signup');
    }
}

module.exports.loginUserGet = (req,res)=>{
    // req.flash("success","Welcome to WanderLust!"); 
    res.render('users/login.ejs');// this is working and "./users/login.ejs" and this also works
}

module.exports.loginUserPost = async(req,res)=>{
    req.flash("Welcome back to WanderLust");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logoutUser = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","Logged out successfully");
        res.redirect('/listings');
    })
}