const express = require('express');

const chatsControllers = require('../controllers/chats');
const middleware = require('../middleware/auth');


const router = express.Router();

router.post('/messages',chatsControllers.postChat);

router.get('/getMessages' , chatsControllers.getChats)

module.exports = router ; 