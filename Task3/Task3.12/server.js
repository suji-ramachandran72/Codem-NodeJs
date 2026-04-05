const  EventEmitter=require("events");
const emitter=new EventEmitter();
emitter.once('serverStart',()=>{
    console.log("Server started for the first time ");
});
emitter.on('serverStart',()=>{
    console.log("Server is running");
});
for(let i=0;i<3;i++){
    emitter.emit('serverStart');
}