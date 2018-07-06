const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const orgData = require('./orgData');

const app = express();

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
    const help = `help`
  
    res.send(help)
  })

app.use((req, res, next) => {
    const token = req.get('Authorization');

    if (token) {
        req.token = token
        next()
    } else {
        res.status(403).send({
            error: 'Error Error Error'
        })
    }
})

app.get('/orgData', (req, res) => {
    res.send(orgData.get(req.token))
})

app.delete('/orgData/:id', (req, res) => {
    res.send(contacts.remove(req.token, req.params,id))
})

app.post('/orgData', bodyParser.json(), (req, res) => {
    const { name, imageUrl } = req.body
    if (name && imageUrl) {
        res.send(orgData.add(req.token, req.body))
    } else {
        res.status(403).send({
            error: 'Errrrror'
        })
    }
})

app.listen(config.port, () => {
    console.log('Server on port %s', config.port)
})