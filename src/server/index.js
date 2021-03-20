// Configure the environment variables
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const mockAPIResponse = require('./mockAPI.js')

const API_KEY = process.env.API_KEY

// Create an instance for the server
const app = express()

// handle cors to avoid cors-origin issue
app.use(cors())

// Including a middlewear
app.use (express.json ());

app.use(express.static('dist'))


app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/api', async (req, res) => {
  const { articleUrl } = req.body
  const Url = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${articleUrl}&lang=en`
  try {
    const {
      data: { score_tag, agreement, subjectivity, confidence, irony },
    } = await axios(Url)
    res.send({
      score_tag: score_tag,
      agreement: agreement,
      subjectivity: subjectivity,
      confidence: confidence,
      irony: irony,
    })
  } catch (error) {
    console.log(error.message)
  }
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, (error) => {
  if (error) throw new Error(error)
  console.log('Server listening on port 8081!')
})

module.exports = {
  app,
}
