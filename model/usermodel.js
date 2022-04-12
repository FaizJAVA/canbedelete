const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    uName:{type:String,required:true},
    uImage:{type:String,required:true},
    uEmail:{type:String,required:true,trim:true},
    uPassword:{type:String,required:true,trim:true}
});

module.exports=mongoose.model('user',userSchema);