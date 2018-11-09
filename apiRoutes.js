const express = require("express");
const router = express.Router();
const path = require("path");
const data = require(path.join(__dirname,"data.js"));

// send JSON of all friends
router.get("/table", function (req, res) {
    res.send(data);
});

// handle incoming results
router.post("/table", function (req, res) {

    // data from requests
    let reqData = req.body;
    let name = reqData.name;

    // send back the client
    res.json({ "name" : closestMatch[0], "photo" : closestMatch[1]});
});

// return the router to server.js
module.exports = router;