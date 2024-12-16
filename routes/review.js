const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressErrors.js');
const Review = require('../models/review.js');
const { reviewSchema } = require('../schema(joi).js');
const Listing = require('../models/listing.js');
const {isLoggedIn, isOwner, isReviewAuthor} = require('../middleware.js')
const reviewController = require('../controllers/review.js');

const validateReview = (req,res,next)=>{
    let { error } = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else next();
}

//Post route for review
router.post("/", isLoggedIn,validateReview ,wrapAsync(reviewController.createReview))
//Delete route for review
router.delete('/:reviewId',isLoggedIn, isReviewAuthor,wrapAsync(reviewController.deleteReview))

module.exports = router;