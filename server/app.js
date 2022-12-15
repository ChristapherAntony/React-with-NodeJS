const express =require('express')
const app=express()
const cors=require('cors')
const { userSignUp, userLogin } = require('./controllers/user');



app.use(cors());
app.use(express.json());



app.post('/api/signup',userSignUp)
app.post('/api/login',userLogin)






app.listen(9000)
