function recursiveChain(n,step=1){
    if(step>n){
        process.nextTick(()=>{
            console.log("Nexttrick after chain");
        });
        setImmediate(()=>{
            console.log("Immediate after chain");
        });
        setTimeout(()=>{
            console.log("Timeout after chain");
        },0);
        return;
    }
    Promise.resolve().then(()=>{
        console.log(`Step ${step}`);
        recursiveChain(n,step+1);
    });
}
recursiveChain(5);