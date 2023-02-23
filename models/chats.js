const Sequelize  = require('sequelize');
const sequelize = require('../util/database');

const Chats = sequelize.define('chats', {
    id:{
        type: Sequelize.INTEGER,
        allowedNull: false,
        autoIncrement: true,
        primaryKey: true
    },
  
    message:{
        type:Sequelize.STRING,
        allowedNull:false
    },
}) ;

module.exports = Chats ;
