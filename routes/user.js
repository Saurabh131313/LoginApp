const express = require('express');
const controller = require('../controller/controller')
const router = express.Router();



router.post('/register',controller.Register)

router.post('/login',controller.Login)

module.exports = router;
