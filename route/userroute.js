const express=require('express');
const userRouter=express.Router();
const userControl=require('../controller/usercontrol');
const multer=require('multer');
const {body}=require('express-validator');

const storage=multer.diskStorage({
    destination:'public/images',
    filename:(request,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname);
    }
});

const upload=multer({storage:storage});

userRouter.post('/signup',upload.single('images'),userControl.SignUp);
userRouter.get('/view',userControl.View);

module.exports=userRouter;