
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const passport = require('passport');

const register = (req, res, next) => {
    bcrypt.hashSync(req.body.password, 10, function(err, hashPass) {
        if(err) {
            res.json({err:err})
        } 
    })
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPass
    })
    user.save()
    .then(user => {
        res.json({ message: "User added successfully!" })})
    .catch(err => {res.json({ message: "User not found!"})})
}

module.exports = register