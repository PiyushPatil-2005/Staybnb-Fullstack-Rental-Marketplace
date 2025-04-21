const express = require("express");
const router = express.Router({mergeParams: true});
const asyncWrap = require("../utils/wrapAsync");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
router.use(flash()); // Initialize flash middleware

const reviewController = require("../controller/reviews.js")

router.use(methodOverride("_method"));

// Post Reviews Route
router.post("/", isLoggedIn, validateReview, asyncWrap(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, asyncWrap(reviewController.destroyReview));

module.exports = router;  