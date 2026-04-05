  const {Readable}=require('stream');
  const stream=new Readable({read(){}});
  stream.push("Line 1: Hello");
  stream.push("Line 2: World");
  stream.push("Line 3: Done");
  stream.push(null);
  stream.on('data',chunk=>{
    console.log("chunck received:",chunk.toString());
  });
  stream.on('end',()=>{
    console.log("Stream ended");
  });