const fs=require('fs');
fs.readFile("users.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }

    const users=data.split("\n");
    console.log("User List");
    users.forEach((user,index)=>{
        if(user.trim()!==""){
             console.log(`${index+1}.${user}`);
        }
       
    });


});