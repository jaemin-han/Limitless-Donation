const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const orgData = require('./orgData');

const app = express()

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
})

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Error'
    })
  }
});

app.get('/orgData', (req, res) => {
  res.send(orgData.get(req.token))
});

app.delete('/orgData/:id', (req, res) => {
  res.send(orgData.remove(req.token, req.params.id))
});

app.post('/orgData', bodyParser.json(), (req, res) => {
  const { name, email } = req.body

  if (name && email) {
    res.send(orgData.add(req.token, req.body))
  } else {
    res.status(403).send({
      error: 'Error! No Name and Email of the Organization'
    })
  }
});

app.listen(config.port, () => {
  console.log('Server listening on port %s', config.port)
});