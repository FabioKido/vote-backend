const express = require('express')
const { createClient } = require('redis')

const router = require('./routes')

const PORT = process.env.PORT || 3000
const app = express()
const client = createClient()


app.use(express.json())
app.use('/api', router)

const startServer = async() => {
    await client.connect()
    
    app.listen(PORT, () => console.log('Server is running...'))
}

startServer()