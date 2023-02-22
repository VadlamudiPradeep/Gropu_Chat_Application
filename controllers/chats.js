const Chats = require('../models/chats');
const sequelize = require('sequelize');


// function isstringValid(string){
//     if(string === undefined || string.length === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
const postChat  =async (req,res)=>{
 try{
    Chats.create({
        message:req.body.message
    }).then(response=>{
        res.status(201).send(response)
    }).catch(err=>console.log(err))
    }
catch(err){
    res.status(500).json(err ,{message:'Something went wrong',success:false})
}
}
    


module.exports = {
    postChat,
}