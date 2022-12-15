const mongoose = require('mongoose') 
// const connection = mongoose.createConnection("mongodb://localhost:27017/ADMIN-CLIENT-SERVER");
const connection =  mongoose.connect('mongodb://localhost:27017/ADMIN-CLIENT-SERVER',(err)=>{
    if(!err)console.log("db connected");
    else console.log('db error');
});


module.exports=connection;