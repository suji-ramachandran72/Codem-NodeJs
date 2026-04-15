let users=[
    { id: 1, name: "Suji" },
    { id: 2, name: "Ram" }
];
exports.getUsers=(req,res)=>{
    console.log("Fetching users");
    res.json({
        message:"appliation running successfully",
        data:users
    });
};
exports.addUser=(req,res)=>{
    const { name }=req.body;
    if(!name){
        return res.status(400).json({ error: "Name required" });
    }
    const newUser={
        id:users.length + 1,
        name
    };
    users.push(newUser);
    console.log("User added");
    res.status(201).json(newUser);
};