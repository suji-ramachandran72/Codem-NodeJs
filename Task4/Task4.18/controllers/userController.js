let users=[
    {id:1,name:"suji"},
    {id:2,name:'priya'}
];
exports.getUsers=(req,res)=>{
    console.log("Controller:Fetch users");
    res.json(users);
};
exports.addUser=(req,res)=>{
    const {name}=req.body;
    if(!name){
        return res.status(400).json({error:"Name requied"});
    }
    const newUser={
        id:users.length+1,name
    };
    users.push(newUser);
    console.log("Controlleer :User Added");
    res.status(201).json({
        message:"Controller executed successfully.User added successfully",
        data:newUser
    });
};