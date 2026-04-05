const  EventEmitter=require("events");
const emitter=new EventEmitter();
let count=0;
emitter.on("orderPlaced",()=>{
    count++;
    console.log("Order Placed successfully");
    console.log("Total Orders:",count);
    console.log();
});
for(let i=0;i<5;i++){
    emitter.emit("orderPlaced")
}