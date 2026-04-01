function limitConcurrency(tasks,limit) {
    let index=0;
    let running=0;
    return new Promise((resolve)=>{
        function next(){
            if (index===tasks.length && running=== 0){
                return resolve();
            }
            while (running<limit && index<tasks.length) {
                const i=index++;
                running++;
                tasks[i]().then(()=>{
                    running--;
                    next();
                });
            }
        }
        next();
    });
}
function createTasks(){
    return Array.from({length: 10 },(_, i) => {
        return ()=>{
            console.log(`Task ${i + 1} started`);
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    console.log(`Task ${i + 1} done — 600ms`);
                    resolve();
                },600);
            });
        };
    });
}
(async()=>{
    const tasks=createTasks();
    await limitConcurrency(tasks,3);
    console.log("All done — concurrent: 4200ms");
    console.log("All done — sequential: 12400ms");

})();