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

    // check to see if list > 5
    // if true, put on waiting list
    // else seat the guest
    if (tableArray.length > 5) {
        waitListArray.push(theCustomer)
    } else {
        tableArray.push(theCustomer)
    }
}

function removeCustomerFromList(theCustomer){
    // remove customer
    // check to see if any in waiting list
    // if true, seat the guest
}





// send JSON of all friends
router.get("/tables", function (req, res) {
    const tableInfo = [tableArray, waitListArray];
    res.send(tableInfo);
});

// handle incoming results
router.post("/tables", function (req, res) {

    // data from requests
    let reqData = req.body;
    let name = reqData.name;

    const newCust = new Customer(reqData.name, reqData.phone, reqData.email);
    addCustomerToList.push(newCust);

    // send back the client
    res.json({ "name" : closestMatch[0], "photo" : closestMatch[1]});
});

// return the router to server.js
module.exports = router;