const Chats = require('../models/chats');

const { Op } = require("sequelize");  // we use the Op object properties to create SQL queries with operators.


function isstringValid(string){
    if(string === undefined || string.length === 0){
        return true;
    }else{
        return false;
    }
}
const postChat  =async (req,res)=>{
    try{
       Chats.create({
           message:req.body.message,
       }).then(response=>{
           res.status(201).json({message:'successfully' ,success:true})
       }).catch(err=>console.log(err))
       }
   catch(err){
       res.status(500).json(err ,{message:'Something went wrong',success:false})
   }
   }

   const getChats =(req, res, next)=>{
    console.log(req.query)
  
        Chats.findAll().then(message=>{
            res.status(200).json({message:message , success:true})
        }).catch(err=>console.log(err))
    }
    

       


module.exports = {
    postChat,
    getChats,
}