const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/categorie')
const rourer = express.Router()


rourer.get('/:idcat',passport.authenticate('jwt', {session: false}), controller.getById)
rourer.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
rourer.post('/',passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)
rourer.delete('/',passport.authenticate('jwt', {session: false}), controller.remove)
rourer.patch('/',passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update)


module.exports = rourer