const User  = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSalt(10);

function isstringValid(string){
    if(string === undefined || string.length === 0){
        return true;
    }else{
         return false;
        }
};

const Signup = async (req ,res)=>{
    try{

    let {name , email , phone , password} = req.body ;
       console.log('name:' + name , 'email :' +email , 'phone :' +phone , 'password :' +password);
    if(isstringValid(name) || isstringValid(email) || isstringValid(phone) || isstringValid(password)){
        
        res.status(400).json({err : 'something is missing' , success: false})
    }
    var salt = await bcrypt.genSalt(10); 
bcrypt.hash(password , salt ,async(err,hash)=>{
  
         User.create({name , email , phone , password:hash }).then(response =>{
           return  res.status(201).json({response :response ,success : true ,message:'successfully create new User'});
         }).catch(err=>{
            return  res.status(404).json({error :err,success : true ,message:'User already exits please login'});
         })
    })
}
catch(err){
        res.status(500).json({error: err, success: false})
    }
};

function GenerateAccessToken(id){
    return jwt.sign({userId : id }, 'secretkey')
}
const Login = async(req,res)=>{
    try{

        let {email , password} = req.body ;

        if(isstringValid(email) || isstringValid(password)){
            throw new Error('email id or password is missing');
        }
        await User.findAll({where:{email}}).then(user =>{
            if(user.length > 0){
                bcrypt.compare(password , user[0].password,(err,result)=>{
                    if(err){
                        throw new Error('Something went wrong');
                    }
                    if(result === true){
                        return res.status(200).json({success:true , message:'user logged successfully',response ,token :GenerateAccessToken(user[0].id)});
                    }else{
                        return res.status(401).json({success:false , message:"user not Authorized "});
                    }
                })
            }else{
                return res.status(404).json({success:false ,message:'user not exits'});
            }
        })

    }catch(err){
       return res.status(500).json({message:err , success:false});
    }
}
module.exports = {
    Signup,
    Login,
    GenerateAccessToken
}