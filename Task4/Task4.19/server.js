const express=require('express');
const app=express();
const adminRouter=express.Router();
function authMiddleware(req,res,next){
    const token=req.headers['authorization'];
    console.log("Checking admin access...");
    console.log("Auth attempt:",token);
    if(!token && token!=='admin123'){
        console.log("unauthorizd access attempt");
        return res.status(404).json({message:"Unauthorized Access"});
    }
    console.log("access granted");
    next();
};
adminRouter.use(authMiddleware);
adminRouter.get('/dashboard',(req,res)=>{
    res.json({message:"Access granted to admin dashboard"});
});
app.use('/admin',adminRouter);
app.get('/',(req,res)=>{
    res.json({message:"Public Route"});
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
