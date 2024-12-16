if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const Review = require('./models/review.js');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressErrors.js');
const { listingSchema, reviewSchema } = require('./schema(joi).js');
const listings = require('./routes/listing.js')
const reviews = require('./routes/review.js')
const flash = require('connect-flash')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require("./models/user.js");
const userRouter = require('./routes/user.js');

const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static('public'));

// Connecting to the mongoDB.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
const session = require('express-session');
const MongoStore = require('connect-mongo');

const dbUrl = process.env.ATLAS_DB

async function main(){
    await mongoose.connect(dbUrl);
}

main().then((res)=>{
    console.log("Connected Successfully");
}).catch((err)=>{
    console.log(err);
});

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 3600,
});

store.on("error", ()=>{
    console.log("Error in mongo session store", err);
})

const sessionOption = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

app.use(session(sessionOption));

// const MONGO_URL = "mongodb://localhost:27017/WanderLust";

app.use(flash());
// Setting up password
app.use(passport.initialize()); // here we are initializing the passport 
app.use(passport.session()); // here this middleware will make sure that the user dont have to login again and again while sending request to the server
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get('/registerUser', async(req, res)=>{
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "student001"
//     })
//     let registerUser = await User.register(fakeUser, "helloworld")
//     res.send(registerUser);
// });

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    // console.log(res.locals.success);
    next();
})
app.use('/listings', listings);
app.use('/listings/:id/reviews', reviews);
app.use('/',userRouter);

// app.get('/testListing',async (req,res)=>{
//     let sampleListing = new Listing({
//         title: "My new villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successfull");
// });

//Middleware for database errors

// app.all("*",(req,res,next)=>{
//     next(new ExpressError(404, "Page not found!"));
// });

app.use((err,req,res,next)=>{
    let { statusCode=500, message="Something went wrong!" } = err;
    res.render("error.ejs",{ statusCode , message})
    // res.status(statusCode).send(message);
})

app.listen(port,()=>{
    console.log(`Server is listening at port: ${port}`);
})