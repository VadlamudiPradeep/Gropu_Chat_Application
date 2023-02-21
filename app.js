const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// routes folders
const SignupRoutes = require('./routes/signupRoutes');


app.use('/user',SignupRoutes);


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