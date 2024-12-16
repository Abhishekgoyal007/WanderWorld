const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const flash = require('connect-flash')
const {saveRedirectUrl} = require('../middleware.js');
const userController = require('../controllers/user.js');

router
.route('/signup')
.get(userController.showSignUpForm)
.post(wrapAsync(userController.CreateUser));

router
.route('/login')
.get(userController.loginUserGet)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect: '/login', failureFlash: true}),userController.loginUserPost)

router.get('/logout',userController.logoutUser)

module.exports = router;