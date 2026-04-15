const express=require('express');
const app=express();
app.use(express.json());
const logger=require('./middleware/logger');
const userRoutes=require('./routes/userRoutes');
const productRoutes=require('./routes/productRoutes');
app.use(logger);
app.use('/users',userRoutes);
app.use('/products',productRoutes);
app.use((req,res)=>{
    res.status(404).json({ error: "Route not found" });
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});