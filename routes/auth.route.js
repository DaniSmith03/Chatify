const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', function(req, res) {
    authController.register
})

router.get('/test', function(req, res) {
    console.log('it works');
})
   
module.exports = router