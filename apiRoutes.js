const express = require("express");
const router = express.Router();
const path = require("path");
const Customer = require(path.join(__dirname,"data.js"));

let tableArray = [];
let waitListArray = [];

const Mike = new Customer ("Mike Kelley", "555-555-1234", "mike@email.com", 1);
tableArray.push(Mike);
const Meeyoung = new Customer ("Meeyoung Park", "555-555-2334", "mp@email.com", 2);
tableArray.push(Meeyoung);
const Bradley = new Customer ("Bradley Driver", "555-555-3456", "bradley@email.com", 3);
tableArray.push(Bradley);
const Abdul = new Customer ("Abdul Sabree", "555-555-4567", "adbul@email.com", 4);
tableArray.push(Abdul);

function addCustomerToList(theCustomer){
    let onWaitList = false;
    // check to see if list > 5
    // if true, put on waiting list
    // else seat the guest
    if (tableArray.length > 5) {
        waitListArray.push(theCustomer)
        onWaitList = true
    } else {
        tableArray.push(theCustomer)
    }

    return onWaitList;
}

// get the tables
router.get("/tables", function (req, res) {
    res.send(tableArray);
});

// get the wait list
router.get("/waitlist", function (req, res) {
    res.send(waitListArray);
});

// clear the tables
router.get("/clear", function (req, res) {
    tableArray = [];
    waitListArray = [];
    res.send("Clearing...");
});

// handle incoming post to add customer
router.post("/tables", function (req, res) {

    // data from requests
    let reqData = req.body;

    const newCust = new Customer(reqData.name, reqData.phone, reqData.email);
    const onWaitList = addCustomerToList(newCust);

    // send back the client
    res.json({ "onwaitlist" : onWaitList});
});

// return the router to server.js
module.exports = router;