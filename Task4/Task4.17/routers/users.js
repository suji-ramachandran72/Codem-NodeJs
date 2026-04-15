const express=require('express');
const router=express.Router();
router.get('/',(req, res)=>{
    console.log("User route accessed");
    res.json({message:"User routes working"});
});
module.exports=router;