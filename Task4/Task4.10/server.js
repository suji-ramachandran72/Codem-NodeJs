const express=require('express');
const app=express();
const items=[];
for (let i=1;i<=20;i++) {
    items.push({id:i,name:"Item"+i});
}
app.get('/items',(req, res)=>{
    let page=parseInt(req.query.page)||1;
    let limit=parseInt(req.query.limit)||5;
    console.log(`Page: ${page}, Limit: ${limit}`);
    if (page < 1 || limit < 1) {
        return res.status(400).json({
            error:"Invalid page or limit"
        });
    }
    const startIndex=(page-1)*limit;
    const endIndex=startIndex+limit;
    const paginatedItems=items.slice(startIndex,endIndex);
    res.status(200).json({
        page:page,
        limit:limit,
        totalItems:items.length,
        data:paginatedItems
    });
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});