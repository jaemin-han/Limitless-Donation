const clone = require('clone');
const config = require('./config');

const db = {}

const defaultData = {
  locations: [
    {
      id: 'commonpantry',
      name: 'NY Common Pantry',
      email: 'nycommonpantry@gmail.com',
      imageURL: config.origin + '/commonpantry.png'
    },
    {
      id: 'fathersheart',
      name: 'Father\'s Heart',
      email: 'fathersheart@gmail.com',
      imageURL: config.origin + '/fathersheart.jpeg'
    },
    {
      id: 'stjoseph',
      name: 'St. Joseph',
      email: 'stjoseph@gmail.com',
      imageURL: config.origin + '/stjoseph.jpg'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, location) => {
  if (!location.id) {
    location.id = Math.random().toString(36).substr(-8)
  }

  get(token).locations.push(location)

  return location
}

const remove = (token, id) => {
  const data = get(token)
  const location = data.locations.find(c => c.id === id)

  if (location) {
    data.locations = data.locations.filter(c => c !== location)
  }

  return { location }
}

module.exports = {
  get,
  add,
  remove
}
