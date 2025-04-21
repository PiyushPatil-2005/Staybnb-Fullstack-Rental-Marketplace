const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listings.js");
const  multer = require("multer");
const { storage } = require("../CloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(asyncWrap(listingController.index))   // Index Route
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        asyncWrap(listingController.createListings));   // Create Route


// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.get("/search", asyncWrap(listingController.searchBarListings));

router.get('/:category', listingController.searchListings);

router.route("/:id")
    .get(asyncWrap(listingController.showListings))   // Show Route
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), asyncWrap(listingController.updateListing))   // Update Route
    .delete(isLoggedIn, isOwner, asyncWrap(listingController.destroyListing));   // Delete Route

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, asyncWrap(listingController.renderEditForm));

router.get("/:id/book", isLoggedIn, asyncWrap(listingController.bookListing));
const Listing = require('../models/listing'); // Adjust path as needed


module.exports = router;