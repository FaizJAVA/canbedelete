const userM=require('../model/usermodel');
exports.SignUp=(request,response)=>{
    let a =request.body.name;
    let b ='http://localhost:3000/images/'+request.file.filename;
    let c =request.body.email;
    let d =request.body.password;
    userM.create({uName:a,uImage:b,uEmail:c,uPassword:d}).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:'not saved'});
    });
}
