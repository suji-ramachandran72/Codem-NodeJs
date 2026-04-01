const fs=require('fs');
function watchAndProcess(filename){
    fs.watch(filename,async(eventType)=>{
        if(eventType==='change'){
            console.log(`File changed:${filename}`);
            try{
                console.log('Reading the file...');
                const data=await fs.promises.readFile(filename,'utf-8');
                const lines=data.split('\n');
                const totalLines=lines.length;
                const filteredLines=lines.filter(lines=>lines.trim()!=='');
                const removed=totalLines-filteredLines.length;
                console.log(`Parsing ${totalLines} lines,${removed} empty removed`);
                await fs.promises.writeFile('output.txt',filteredLines.join('\n'));
                console.log("Saved to output.txt");
            }catch(err){
                console.error("Error:",err);
            }
        }
    });
}
watchAndProcess('data.txt');