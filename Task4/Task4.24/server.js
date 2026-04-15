const express=require('express');
const app=express();
app.use(express.json());
const logger=require('./middlewares/logger');
const userRoutes=require('./routes/userRoutes');
app.use(logger);
app.use('/users',userRoutes);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});