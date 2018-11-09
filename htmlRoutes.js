const express = require("express");
const router = express.Router();
const path = require("path");

// html routes
router.get("/", function(req, res) {
    // route to home page
    res.sendFile(path.join(__dirname,"home.html"));
});

// route for static content like css, javascript and images
router.use(express.static(path.join(__dirname,"/assets")));

router.get("/make", function(req, res) {
    // route to home page
    res.sendFile(path.join(__dirname,"make.html"));
});

router.get("/test", function(req, res) {
    // route to home page
    res.sendFile(path.join(__dirname,"test.html"));
});

router.get("/testmake", function(req, res) {
    // route to home page
    res.sendFile(path.join(__dirname,"test-make.html"));
});

router.get("/view", function(req, res) {
    // route to home page
    res.sendFile(path.join(__dirname,"view.html"));
});

// return the router to server.js
module.exports = router;

