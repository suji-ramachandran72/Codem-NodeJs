const fs=require('fs');
fs.readFile("product.json",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }
    const products=JSON.parse(data);
    console.log("Product List");
    products.forEach(p=>{
        console.log(`${p.name}- ${p.price}`)
    });
});