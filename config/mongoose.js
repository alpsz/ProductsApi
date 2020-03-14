//adding all the required libraries
const mongoose = require('mongoose');

//Creating a connection to the database
mongoose.connect('mongodb://localhost/Product_Inventory');

const db = mongoose.connection;

//if connection is not established then pringting the error
db.on('error', console.error.bind(console,"Error connecting to mongodb"));


//opening a connection to the database
db.once('open', function(){
    console.log('connected to database mongodb!!!');
});


//exporting the database
module.exports = db;
