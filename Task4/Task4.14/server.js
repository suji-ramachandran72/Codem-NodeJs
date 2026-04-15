const express=require('express');
const app=express();
let users=[
    {id:101,name:"Suji",email:'suji@gmail.com'},
    {id:102,name:"Priya",email:'priya@gmail.com'},
    {id:103,name:"Venila",email:'venila@gmail.com'}
]
app.use(express.json());
app.get('/users',(req,res)=>{
    console.log('Fetching all users');
    res.status(200).json(users);
})
app.post('/users',(req,res)=>{
    const {name,email}=req.body;
    console.log("validating user...");
    if(!name && !email){
        console.log("Validation failed")
        return res.status(404).json({
            error:"name and email are required"
        });
    }
    const newUser={
        id:users.length+1,
        name,
        email
    };
    users.push(newUser);
    console.log("user addded");
    res.status(201).json({message:"User created successfully",data:newUser});
});
app.put('/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const {name,email}=req.body;
    const user=users.find(u=>u.id===id);
    if(!user){
        return  res.status(404).json({error:"User not found"});
    }
    user.name=name ||user.name;
    user.email=email ||user.email;
    console.log("User updated");
    res.json({message:"User updated successfully",data:user});
   
});
app.delete('/users/:id',(req,res)=>{
     const id=parseInt(req.params.id);
     const index =users.findIndex(u=>u.id===id);
     if(index===-1){
        return  res.status(404).json({error:"User not found"});
     }
     users.splice(index,1);
     console.log("User deleted");
     res.json({message:"User deleted successfully"})
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});