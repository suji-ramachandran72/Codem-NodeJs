const express=require('express');
const app=express();
const users=[
    {username:"suji",email:"suji@mail.com",role:"student"},
    {username:"ram",email:"ram@mail.com",role:"admin"},
    {username:"priya",email:"priya@mail.com",role:"student"}
];
app.get('/users/:username',(req, res)=>{
    const uname=req.params.username;
    console.log("Requested Username:",uname);
    const user=users.find(u => u.username===uname);
    if(!user){
        return res.status(404).json({
            error:"User not found"
        });
    }
    res.status(200).json({
        data:user,
        requestedAt:new Date()
    });
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});