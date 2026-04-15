let products=[];
exports.getProducts=(req, res) => {
    console.log("Get Products");
    res.json(products);
};
exports.addProduct=(req,res)=>{
    const { name, price }=req.body;
    if (!name || !price) {
        return res.status(400).json({ error: "Invalid data" });
    }
    const newProduct={ id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
};