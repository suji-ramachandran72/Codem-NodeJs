const express=require('express');
const userRouter=express.Router();
userRouter.get('/',(req, res) =>{
    console.log("User route Accessed");
    res.json({message:"Users API"})
});
module.exports=userRouter;