const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', function(req, res) {
    authController.register
})

   
module.exports = router