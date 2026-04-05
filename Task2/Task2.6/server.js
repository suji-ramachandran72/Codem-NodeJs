const EventEmitter=require('events');
const fs=require('fs');
const emitter=new EventEmitter();
emitter.on('dataReceived',async(data)=>{
    console.log('Data Received->',data);
    if(data &&data.value >0){
        emitter.emit('dataValid',data);
    }else{
        emitter.emit('dataInValid',data);
    }
});
emitter.on('dataValid',async(data)=>{
    console.log('DataValid->validation passed');
    const processed={
        id:data.id,
        value:data.value*2
    };
    emitter.emit('dataProcessed',processed);
});
emitter.on('dataInValid',async(data)=>{
    console.log('DataValid->validation failed');
});
emitter.on('dataProcessed',async(data)=>{
    console.log('DataProcessed->',data);
    await fs.promises.writeFile('result.txt',JSON.stringify(data));
    emitter.emit('dataSaved');
});
emitter.on('dataSaved',()=>{
    console.log('DataSaved-> written to result.txt');
});
emitter.emit('dataReceived',{id:1,value:42});
