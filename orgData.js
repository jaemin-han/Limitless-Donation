const clone = require('clone');
const config = require('./config');

const db = {}

const mockData = {
    locations: [
        { 
            'id': 'NY Common Pantry',
            'name': 'NY Common Pantry',
            'imageUrl': config.origin + '/commonpantry.png',
          },
          {
            'id': 'Father\'s Heart Ministries',
            'name': 'Father\'s Heart Ministries',
            'imageUrl': config.origin + 'fathersheart.jpeg',
          },
          {
            'id': 'St. Joseph Soup Kitchen',
            'name': 'St. Joseph Soup Kitchen',
            'imageUrl': config.origin + '/stjoseph.jpg',
          }
    ]
}

const get = (token) => {
    let data = db[token]
    if (data == null) {
        data = db[token] = clone(mockData)
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