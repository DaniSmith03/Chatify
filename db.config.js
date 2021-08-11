//database setup
const mongoose = require('mongoose');
// Mongo DB Connection 
  mongoose.connect("mongodb+srv://admin:dcbackend2021@cluster0.8yp23.mongodb.net/chatifydb?retryWrites=true&w=majority",  {
    dbName: "chatifydb",
    user: "admin",
    pass: "dcbackend2021",
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then( (res) => console.log('Mongo DB connected'))
    .catch((err) => console.log(err));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connection works.")
});