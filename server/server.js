const express = require('express')
const app = express()
const PORT = 8000

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}))

const JokeRoutes = require('./routes/jokes_routing')
JokeRoutes(app)

app.listen(PORT, () => console.log(`Running on port: ${PORT}`))