//if we are in development, require the dotenv npm package. This loads all our env variables into process.env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const User = require("./models/user.model");
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
const db = require("./config/db.config.js");



//authentication
const bcrypt = require('bcrypt'); // hash user passwords
const initializePassport = require('./config/passport.config');
const passport = require('passport');
const flash = require('express-flash'); //displays login success/failure messages
const session = require('express-session'); //stores variables to be used persistently across the entire session our user has
const methodOverride = require('method-override');
initializePassport(
  passport,
  email => User.findOne({email: email}),
  id => User.findOne({id: id})
  )

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

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))


app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});

<<<<<<< HEAD
app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPW = await bcrypt.hashSync(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPW
    });
=======


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

>>>>>>> 9df948a3cc07c590435968d1b62b0476c6cdd62e
    res.redirect('/login'); //is all is well, redirect to login page
  } catch {
    res.redirect('/register'); //if something goes wrong redirect to register page
  }
<<<<<<< HEAD
  console.log(users);
=======
  
>>>>>>> 9df948a3cc07c590435968d1b62b0476c6cdd62e
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

<<<<<<< HEAD
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

server.listen(port, () => {
  console.log('Server has started successfully');
=======

server.listen(3000, () => {
  console.log('listening on *:3000');
>>>>>>> 9df948a3cc07c590435968d1b62b0476c6cdd62e
});