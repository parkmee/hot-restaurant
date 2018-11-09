const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const htmlRoutes = require(path.join(__dirname,"htmlRoutes"));
const apiRoutes = require(path.join(__dirname,"apiRoutes"));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


// listen for incoming connections
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

