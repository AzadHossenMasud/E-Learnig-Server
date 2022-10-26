const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 5000


const catagories = require('./data/catagories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/catagories', (req, res) => {
  res.send(catagories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})