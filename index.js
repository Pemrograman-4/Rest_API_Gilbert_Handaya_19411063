//Pemrogrman 4 SI 2019

const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const bodyParser = require('body-parser')
const db = require('./Config/database')
app.use(cors())
app.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}))
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}))
db.connectToDb
app.use('/users', require('./Router/user_router'))
app.get("/", (req, res) => {
  res.json({ message: "Welcome To Programming 4"})
})
app.listen(port, function(){
  console.log('loading in port:' +port)
})