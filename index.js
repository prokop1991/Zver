const app = require('./app')

const port = process.env.port || 5000





app.listen(port, function() {
    console.log(`Сервер создан на порту ${port}`)
})