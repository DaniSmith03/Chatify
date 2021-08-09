//express server
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//socket.io
const { Server } = require("socket.io");
const io = new Server(server);

//database setup
const { Sequilize } = require('sequelize');
const sequelize = new Sequilize('postgres://localhost:5432/chatify'); //connect to the database
const bcrypt = require('bcrypt'); // hash user passwords


app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false })); // take the forms and access them inside the req in post methods.

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/users/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/users/login', (req, res) => {

})

app.get('/users/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/users/register', (req, res) => {
  
});

app.get('/users/dashboard', (req, res) => {
  res.render('dashboard.ejs', {user: "Laura"});
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });


server.listen(3000, () => {
  console.log('listening on *:3000');
});