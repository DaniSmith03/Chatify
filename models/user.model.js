const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name: String,
    email: String,
    password: String
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;
//   const user = new User({
//     name: 'TestSubject',
//     email: 'testsubj@yahoo.com',
//     password: 'hopethisworks'
//   });

//   user.save(function(err, user) {
//     if (err) {
//       return console.log(err);
//     }
//   });