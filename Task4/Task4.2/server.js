const express=require('express');
const app=express();
function getResponse(route,message){
    return{
        route:route,
        message:message,
        time:new Date()
    };

}
app.get('/home',(req,res)=>{
    console.log("Home accessed");
    res.status(200).json(getResponse("home","Welcome to Home Page"));
});
app.get('/about',(req,res)=>{
    console.log("About accessed");
    res.status(200).json(getResponse("about","Welcome to About Page"));
});
app.get('/contact',(req,res)=>{
    console.log("Contact accessed");
    res.status(200).json(getResponse("contact","Welcome to Contact Page"));
});
app.use((req,res)=>{
    console.log("Invalid route");
    res.status(404).json({error:"Route not found"});
});
app.listen(3000,()=>{
     console.log("Server is running on port 3001");
});