//importing all the required files and libraries
const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(expressLayouts);


//use express router
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }

    console.log(`Server is running on port ${port}`);
});