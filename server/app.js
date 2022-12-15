const express =require('express')
const app=express()
const userRoutes=require('./routes/user')
const adminRoutes=require('./routes/admin')
const cors=require('cors')




app.use(cors());
app.use(express.json());


app.use('/api',userRoutes);
app.use('/api/admin',adminRoutes);


app.listen(9000)
