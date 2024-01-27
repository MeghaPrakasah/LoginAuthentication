
const http = require('http')

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./Routes/auth');
const protectedRoutes = require('./Routes/protectedRoutes')

mongoose .connect('mongodb://localhost:27017/JWT' ,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=>{
    console.log("DB Connected")})
.catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use('/auth',authRoutes);

app.use('/protected',protectedRoutes);

const port = 3000 ;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    }
);