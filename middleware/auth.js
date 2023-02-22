const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticate = (req, res, next) => {

    try {
        const token = req.header('Authorization');
        console.log('token:' + token);
        const user = jwt.verify(token,process.env.TOKEN_SECRET);
        console.log('middleware user :' +user)
        console.log('userID >>>> ', user.userId)
        User.findByPk(user.userId).then(user => {

            req.user = user; ///ver
            next();
        })

      } catch(err) {
        console.log(err);
        return res.status(401).json({success: false})
        // err
      }

}

module.exports = {
    authenticate
}