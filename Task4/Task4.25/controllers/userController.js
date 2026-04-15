let users=[];
exports.getUsers=(req, res) => {
    console.log("Get Users");
    res.json({success:true,data:users});
};
exports.addUser=(req, res) => {
    const { name }=req.body;
    if(!name){
        return res.status(400).json({ success:false,error: "Name required" });
    }
    const newUser={id:users.length + 1, name };
    users.push(newUser);
    res.status(201).json({success:true,message:"User Added",data:newUser});
};