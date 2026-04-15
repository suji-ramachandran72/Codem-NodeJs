const express=require('express');
const app=express();
const userRouter=require('./routers/users');
const orderRouter=require('./routers/orders');
const productRouter=require('./routers/products');
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/orders',orderRouter);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});