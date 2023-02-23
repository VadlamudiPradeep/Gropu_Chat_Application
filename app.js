const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

const cors = require('cors');
app.use(cors());

//app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// routes folders
const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/chats');


app.use('/user',userRoutes);
app.use('/chat',chatRoutes);


const userModels = require('./models/user');
const chatModels = require('./models/chats');

userModels.hasMany(chatModels);
chatModels.belongsTo(userModels);


sequelize
//.sync({force:true})
 .sync()
.then(response =>{
    app.listen(3000,()=>{
        console.log('Port is  running on 3000')
    });
})
.catch(err=>{
    console.log(err);
})