const express=require('express');
const app=express();
const productRouter=express.Router();
productRouter.use((req,res,next) => {
    const time=new Date().toISOString();
    res.on('finish',()=>{
        console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} - ${time}`);
    });
    next();
});
productRouter.get('/',(req, res)=>{
    res.status(200).json({
        message:"Products API working"
    });
});
app.use('/products',productRouter);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});