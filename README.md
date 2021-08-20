# Chatify
DigitalCrafts Backend Project


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://chatifydc.herokuapp.com/login)

While this project started as just a program requirement, we wanted to build something with substance. Why? Because we are developers of course! The application outlined in this documentation is a chat application designed to take you back to early 2000's AIM/ Yahoo messenger. While we hope the application is reminiscent of simpler times, We Would like to deliver something more than a simple application.

Current Features:

* Register - Create a login for access to the app.
* Login - authentication based login to the application
* Chat - send messages to other users connected to the session
 

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

* [Heroku](https://www.heroku.com/)
* [MongoDB](https://docs.mongodb.com/)
* [Mongoose](https://mongoosejs.com/docs)
* [Express](https://expressjs.com/)
* [Socket.io](https://github.com/cferdinandi/smooth-scroll)
* [Passport](http://www.passportjs.org/docs/)



<!-- GETTING STARTED -->
## Getting Started

Getting started, you'll want to clone the repo from github and install the Node modules required. You will also need to create a database in MongoDB ( A cloud hosted DB was used for this project). Once created you'll need to alter the connection strings in the db.config file. You will also need to alter the server port configurations in the server.js file

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Socket.io
  ```sh
  npm install socekt.io
  ```
* Express
  ```sh
  npm install express
* Express Session
  ```sh
  npm install express-session
* Express Flash
  ```sh
  npm install express-flash
* Ejs
  ```sh
  npm install ejs
  ```
* MongoDB Driver
  ```sh
  npm install mongodb
  ```
* Mongoose
  ```sh
  npm install mongoose --save
  ```
* Passport
  ```sh
  npm install passport
  ```
* Passport Local
  ```sh
  npm install passport-local
  ```
* Bcrypt
  ```sh
  npm install bcrypt
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/lcmedina/Chatify.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file 
  ```txt
  SESSION_SECRET= YourSecretKEY
  .env file

4. Connect your database
  ```js
  db.config.js file

5. Connect your server
  ```js
  server.js file


<!-- USAGE EXAMPLES -->
## Usage

This code can be used as a base to build a chat application that connects end users to each other in real time.



<!-- ROADMAP -->
## Roadmap

Planned future updates:

* Private Messaging and Chat Rooms - Currently the app only supports a single chat session that anyone can join.
* Friends List - Keep track of other users by adding them into a friends list.
* Edit Account- We want users to be able to update or remove their accounts without our intervention ( or consent ). 
* User Profiles- Because everyone wants to write an about me posted next to a perfectly curated selfie. 


While we can't completely copyright and bright back all of your favorite messengers we hope to bring their functionality to life in a a fun way. 

Known Bugs

* Duplicate Registrations- Currently no functionality exist to prevent duplicate email addresses in registration.


<!-- CONTRIBUTING -->
## Contributing

This project is currently closed for contributions but feel free to clone this repo and build something awesome of your own!



<!-- CONTACT -->
## Contact

Dani Smith  - (https://github.com/danismith03) - DaniSmith.codes
Laura Medina - https://github.com/lcmedina - LauraChristine.net
Project Link: [https://github.com/lcmedina/Chatify.git](https://github.com/lcmedina/Chatify.git)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Git Cheat Sheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
* [Functionality Tutorial](https://www.youtube.com/watch?v=-RCnNyD0L-s&t=1757s)
* [Digital Craft](https://www.digitalcrafts.com/)