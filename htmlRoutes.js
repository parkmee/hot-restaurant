const express = require("express");
const router = express.Router();
const path = require("path");

// html routes
router.get("/", function(req, res) {
    // route to home page
    res.sendFile(path.join(__dirname,"home.html"));
});

router.get("/make", function(req, res) {
    // route to home page
    res.sendFile(path.join(__dirname,"make.html"));
});

router.get("/view", function(req, res) {
    // route to home page
    res.sendFile(path.join(__dirname,"view.html"));
});

// return the router to server.js
module.exports = router;

