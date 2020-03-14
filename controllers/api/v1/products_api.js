const Product = require('../../../models/products');
module.exports.index = async function(req, res){
    
           let products  = await Product.find({})
           .sort('-createdAt');
        
           return res.json(200,{
                products:products
           });
       
}


module.exports.create = async function(req, res){
    try{
        
            let product = await Product.create({
                name: req.body.name,
                quantity: req.body.quantity
            });
            
            return res.json(200,{
                data:{
                    product:product
                }
            })
       
    }catch(err){
        console.log("Error while creating a product",err);
        return res.json(500,{
            message:"Internal server error"
        });
    }
}


module.exports.destroy = async function (req, res) {
    try {
        let product = await Product.findById(req.params.id);
        
            product.remove();

        

           
        return res.json(200,{
            message:"Product Deleted"
        });
        
    }catch (err) {
        console.log("Error while deleting the product",err);
        return res.json(500,{
                message:"Internal server error"
        });
    }

}

module.exports.update_quantity = function(req,res){

    try {
        Product.findOneAndUpdate({_id:req.params.id},
            {$set:{quantity:req.params.number}},function(err,product){
                if(err){
                    console.log("Cannot update the product");
                }
                return res.json(200,{
                    data:{
                        product:product,
                    },
                    message:"Updated Successfully"
                });

            }
            );
        
    }catch (err) {
        console.log("Error while updating the product",err);
        return res.json(500,{
                message:"Internal server error"
        });
    }

}