require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', (req, res) => {
    res.send("weterjgklfjgdfkljg")
})
//qweqw
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`start on ${PORT} port`)
        )
    } catch (e) {
        console.log(e)
    }
}
start()