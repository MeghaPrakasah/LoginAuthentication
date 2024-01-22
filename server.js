
const http = require('http')

const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

mongoose .connect('mongodb://localhost:27017' ,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=>{
    console.log("DB Connected")})
.catch((err)=>{
    console.log(err);
});




const port = 3000 ;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    }
);