let users=[];
exports.getUsers=(req, res) => {
    console.log("Get Users");
    res.json(users);
};
exports.addUser=(req, res) => {
    const { name }=req.body;
    if(!name){
        return res.status(400).json({ error: "Name required" });
    }
    const newUser={id:users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
};