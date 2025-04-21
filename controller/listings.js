const Listing = require("../models/listing");
const mongoose = require("mongoose");


module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = async (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListings = async (req, res) => {
    const {id} = req.params;
    const data = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    // console.log(data);
    if (!data) {
        req.flash("error", "Listing you requested does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", {data});
};

module.exports.createListings = async (req, res) => {
    try {
        let url = req.file.path;
        let filename = req.file.filename;
        let data = req.body.listing;

        // Create new listing
        const newListing = new Listing(data);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };

        // Handle categories
        if (Array.isArray(data.category)) {
            newListing.categories = data.category; // Assign array directly
        } else if (data.category) {
            newListing.categories = [data.category]; // Convert to array if it's a single value
        } else {
            newListing.categories = []; // Default to empty array if no category is selected
        }

        await newListing.save();
        req.flash("success", "New Listing Created");
        res.redirect("/listings");
    } catch (err) {
        console.error(err);
        req.flash("error", "Error creating listing");
        res.redirect("/listings/new");
    }
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    let data = await Listing.findById(id);
    if (!data) {
        req.flash("error", "Listing you requested does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {data});
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listingData = req.body.listing;
    const listing = await Listing.findByIdAndUpdate(id, listingData, { new: true });

    // Handle image update
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
    }
    await listing.save(); 
    req.flash("success", "Listing updated successfully");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully");
    res.redirect("/listings");
}

module.exports.searchListings = async (req, res, next) => {
    let { category } = req.params;
    // If it's a valid ObjectId, skip to next route (which is the details page)
    if (mongoose.Types.ObjectId.isValid(category)) {
        return next();
    }
    if (category=== 'FarmHouse') {
        category = 'Farm House';  // Convert "FarmHouse" to "Farm House"
    }
    if (category=== 'TinyHomes') {
        category = 'Tiny Homes';  // Convert "FarmHouse" to "Farm House"
    }

    try {
        let allListings;
        if (category.toLowerCase() === 'all') {
            allListings = await Listing.find({});
        } else {
            allListings = await Listing.find({ categories: { $in: [category] } });
        }
        res.render('listings/index', { allListings });
    } catch (err) {
        console.error(err);
        req.flash("error", "Error loading listings");
        res.redirect('/listings');
    }
};

module.exports.searchBarListings = async (req, res) => {
    const query = req.query.q;
    try {
        const listings = await Listing.find({
            $or: [
                { location: { $regex: query, $options: 'i' } },
                { country: { $regex: query, $options: 'i' } }
            ]
        });

        if (listings.length === 0) {
            // No results found
            return res.render('listings/noresult', { query });
        }
        // Results found
        res.render('listings/index', { allListings: listings });
    } catch (err) {
        console.error(err);
        req.flash("error", "Error fetching search results");
        res.redirect('/listings');
    }
};

module.exports.bookListing = async (req, res) => {
   res.render("listings/book.ejs"); 
};