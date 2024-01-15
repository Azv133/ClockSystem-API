const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./config/db')
const app = express()

const port = process.env.PORT

const userRouter = require('./routes/UserRoutes')

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('La aplicación está funcionando...')
})

db.connect()