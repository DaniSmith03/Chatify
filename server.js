//if we are in development, require the dotenv npm package. This loads all our env variables into process.env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const User = require("./models/user_model");
//express server
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//socket.io
const { Server } = require("socket.io");
const io = new Server(server);

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



              //testing mongo
              const kittySchema = new mongoose.Schema({
                name: String,
                color: String
              });
              const Kitten = mongoose.model('Kitten', kittySchema);
              const silence = new Kitten({ name: 'Silence', color: 'Orange' });
              console.log(silence.name); // 'Silence'
              silence.save(function (err, silence) {
                if (err) return console.error(err);
                console.log("kitten saved")
              });

              const ownerSchema = new mongoose.Schema({
                name: String,
                Age: Number
              });
              const owner = mongoose.model('Owner', ownerSchema);
              const Bob = new owner({ name: 'Bob', Age: 23 });
              console.log(Bob.name, Bob.age);
              Bob.save(function (err, Bob) {
                if (err) return console.error(err);
                console.log("owner saved")
              });




//authentication
const bcrypt = require('bcrypt'); // hash user passwords
const initializePassport = require('./passport.config');
const passport = require('passport');
const flash = require('express-flash'); //displays login success/failure messages
const session = require('express-session'); //stores variables to be used persistently across the entire session our user has
const methodOverride = require('method-override');
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
  )
const users = [];

//replaces body parser
app.use(express.json());

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false })); // take the forms and access them inside the req in post methods.
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, //we don't want to save if nothing has changed
  saveUninitialized: false //don't save empty values
}))
app.use(passport.initialize())
app.use(passport.session()) 
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs');
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
});



//Test Code
app.post('/login',(req, res)=>{
  let eAddress= req.body.email;
  console.log("variable is ", eAddress);
  User.findOne({ email: eAddress }, function (err, user) {
    if (!user) {
            console.log(user);
            return res.status(404).send({ message: "User Not found." })
            }
          else{
            res.render('index.ejs');
            console.log("User Exist", user);
          }
  });


  //   .then(user => {
  //     if (!user) {
  //       console.log(user);
  //       return res.status(404).send({ message: "User Not found." })
  //       }
  //     else{
  //       console.log("User Exist");
  //     }
  
  // });
    });

  
  











app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});



app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPW = await bcrypt.hashSync(req.body.password, 10)
    var userData = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPW
  }
  console.log("user data is", userData );
  new User(userData).save();

    res.redirect('/login'); //is all is well, redirect to login page
  } catch {
    res.redirect('/register'); //if something goes wrong redirect to register page
  }
  
});










app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });


server.listen(3000, () => {
  console.log('listening on *:3000');
});