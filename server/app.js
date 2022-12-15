const express =require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("api is working")
});


app.listen(9000,()=>"server running on 9000 port")
