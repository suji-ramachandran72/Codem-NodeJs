const auth=(req,res,next) => {
    const token=req.headers['authorization'];
    if (token !=="admin123") {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
};
module.exports=auth;