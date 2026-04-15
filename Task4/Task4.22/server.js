const express=require('express');
const app=express();
const authMiddleware=(req, res, next)=>{
    const token=req.headers['authorization'];
    console.log("Auth attempt:",token);
    if(!token || token !== "admin123") {
        return res.status(401).json({
            message:"Unauthorized"
        });
    }
    next();
};
app.get('/',(req, res)=>{
    res.json({ message: "Public Route Working" });
});
app.get('/admin',authMiddleware,(req, res) => {
    console.log("Admin route accessed");
    res.status(200).json({
        message: "Welcome Admin"
    });
});
app.use((req, res)=>{
    res.status(404).json({ error: "Route not found" });
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});