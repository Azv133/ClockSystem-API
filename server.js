const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./config/db')
const db_mysql = require('./config/db_mysql')
const app = express()

const port = process.env.PORT

const userRouter = require('./routes/UserRoutes')
const marcacionRouter = require('./routes/MarcacionRoutes')

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(marcacionRouter)

global.APP_NAME = 'ClockSystem';

app.listen(port, () => {
    console.log('La aplicación está funcionando...')
})

// db.connect()