const express=require('express');
const app=express();
const students=[
    {id:1,name:'suji',course:'CSE',age:19},
    {id:1,name:'priya',course:'EEE',age:18},
    {id:1,name:'venila',course:'ECE',age:20},
    {id:1,name:'safrin',course:'CSE',age:21},
    {id:1,name:'shiny',course:'EEE',age:17}

];
app.get('/students',(req,res)=>{
    console.log("All students fetched");
    res.json(students);
});
app.get('/students/count',(req,res)=>{
    console.log("Students counts are displayed");
    res.json({total:students.length});
});
app.get('/students/names',(req,res)=>{
    console.log("All students  names are fetched");
    const names=students.map(s=>s.name);
    res.json({Names:names});
});
app.listen(3000,()=>{
     console.log("Server is running on port 3000");
});