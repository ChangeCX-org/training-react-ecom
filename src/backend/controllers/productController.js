const Product = require("../data/plp.json")

exports.getProducts = async (req,res) => {
    try{
        // const products = await Product.find();
        res.status(200).json({
            status: "ok",
            products: Product.data,
            
        })
    }catch(err){
        res.status(400).json({
            status: "error",
            message: err+err
        })
    }
}