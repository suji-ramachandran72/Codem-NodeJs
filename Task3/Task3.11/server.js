const  EventEmitter=require("events");
const emitter=new EventEmitter();
emitter.on("productAdded",()=>{
    console.log("Product saved to the database");
});
emitter.on("productAdded",(product)=>{
    console.log("Email notification sent ");
});
emitter.on("productAdded",(product)=>{
    console.log("Inventory updated");
});
emitter.on("productAdded",(product)=>{
    console.log("Product Name:",product);
});
 emitter.emit("productAdded","Laptop")
