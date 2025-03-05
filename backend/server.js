const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 5000

app.use(cors())


const test= require('./routes/test/test')

app.use('/api/v1/test', test.router)

app.listen(PORT, ()=>{
    console.log(`Server is Listining`);
})