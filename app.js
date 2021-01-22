const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const authRouters = require('./routes/auth')
const categorieRouters = require('./routes/categorie')
const farmRouters = require('./routes/farm')
const app = express()



app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


app.use('/api/auth', authRouters)
app.use('/api/categories', categorieRouters)
app.use('/api/farm', farmRouters)

module.exports = app