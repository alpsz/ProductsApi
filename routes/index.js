//importing all the necessary files
const express = require('express');
const router = express.Router();


console.log("Router loaded");

//setting up the router paths 
router.use('/api', require('./api'));

//exporting the router
module.exports = router;