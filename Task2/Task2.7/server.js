function withTimeout(promise,ms,name){
    return new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>{
            reject(`${name} timed out`);
        },ms);
        promise .then((res)=>{
            clearTimeout(timer);
            resolve(res);
        })
        .catch((err)=>{
            clearTimeout(timer);
            resolve(res);
        });
    });
}
function createPromise(name,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(name);
        },delay);
    });
}
const p1=withTimeout(createPromise('fetch1',400),1000,'fetch1');
const p2=withTimeout(createPromise('fetch2',1200),1000,'fetch2');
const p3=withTimeout(createPromise('fetch3',800),1000,'fetch3');
const p4=withTimeout(createPromise('fetch4',2500),1000,'fetch4');
const p5=withTimeout(createPromise('fetch5',600),1000,'fetch5');
Promise.allSettled([p1,p2,p3,p4,p5]).then((results)=>{
    const fulfilled=[];
    const timeout=[];
    results.forEach((res,index)=>{
        const name=`fetch${index+1}`;
        if(res.status==='fulfilled'){
            fulfilled.push(name);
        }else{
            timeout.push(name);
        }
    });
    console.log("Fulfilled:",fulfilled.join(', '));
    console.log("Timed Out:",timeout.join(', '));

});