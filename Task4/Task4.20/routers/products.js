const express=require('express');
const productRouter=express.Router();
productRouter.get('/',(req, res) =>{
    console.log("Product route Accessed");
    res.json({message:"Products API"})
});
module.exports=productRouter;
