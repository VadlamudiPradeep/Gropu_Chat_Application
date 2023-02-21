const User  = require('../models/users');
const bcrypt = require('bcrypt');
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
   
       await User.create({name , email , phone , password:hash }).then(response =>{
        res.status(201).json({response:response , success : true ,message:'successfully create new User'});
    }).catch(err=>{
        res.status(404).json({message:"user is already exists please login ..." ,success:false})
    })
        
       })
      
        
}
catch(err){
        res.status(500).json({error: err, success: false})
    }
};

module.exports = {
    Signup,
}