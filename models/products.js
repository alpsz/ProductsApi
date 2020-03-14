//adding all the required libraries 
const mongoose = require('mongoose');


//designing the schema for the product
const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        quantity:{
            type:String,
            required:true,
        }

    },{
        timestamps:true
    }
);


const Product = mongoose.model('Product',productSchema);

//exporting the schema
module.exports = Product;