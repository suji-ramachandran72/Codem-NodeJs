const  EventEmitter=require("events");
const emitter=new EventEmitter();
emitter.on('error',(err)=>{
    console.log("Error;",err.message);
});
emitter.on('processData',(data)=>{
    if(!data){
        console.log("Processing:",data);
        emitter.emit('error',new Error("Invalid data received"));
    }
    else{
        console.log("Processing:",data);
        console.log("Data processed successfully");
    }
});
emitter.emit("processData","valid data");
emitter.emit("processData",null);