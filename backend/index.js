const express = require('express')
const app = express()
const port = 5000
const cors=require('cors')
const cookieParser = require('cookie-parser')
const  connectDB  = require('./config/db')
const dotenv=require('dotenv')
const mainRoute=require('./mainRoute')
const passport = require('passport')
const path = require('path');
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
connectDB()

app.use(passport.initialize());



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api',mainRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
