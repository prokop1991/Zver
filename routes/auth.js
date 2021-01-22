const express = require('express')
const controller = require('../controllers/auth')
const rourer = express.Router()


rourer.post('/login', controller.login)
rourer.post('/register', controller.register)

module.exports = rourer