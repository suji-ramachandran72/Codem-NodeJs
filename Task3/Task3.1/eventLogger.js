const  EventEmitter=require("events");
const emitter=new EventEmitter();
emitter.on("userLogin",(user,time)=>{
    console.log("User Login Event Triggered");
    console.log("User:",user);
    console.log("Time:",time);
    console.log();
});
emitter.emit("userLogin","John","10:30 AM");
emitter.emit("userLogin","Sara","10:35 AM");