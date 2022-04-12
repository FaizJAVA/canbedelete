const express =require('express');
const bodyparser=require('body-parser');
const userRouteImport=require('./route/userroute');
const mongoose=require('mongoose');
const path=require('path');

const port=process.env.PORT||3000;

mongoose.connect('mongodb+srv://FaizaanKhan:123@canbedeletecluster.c3vig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(result=>{
    console.log('successfull');
}).catch(err=>{
    console.log(err);
})
const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/user/',userRouteImport);

app.listen(port,()=>{
    console.log('server running');
});

