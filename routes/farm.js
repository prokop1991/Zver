const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/farm')
const rourer = express.Router()

rourer.get('/', /*passport.authenticate('jwt', {session: false}),*/ controller.getAll)


module.exports = rourer