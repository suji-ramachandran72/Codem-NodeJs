const express=require('express');
const orderRouter=express.Router();
orderRouter.get('/',(req, res) =>{
    console.log("Order route Accessed");
    res.json({message:"Orders API"})
});
module.exports=orderRouter;
