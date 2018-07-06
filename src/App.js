import React, { Component } from 'react';
import DonationLists from './DonationLists';

const locations = [
  { 
    'id': 'NY Common Pantry',
    'name': 'NY Common Pantry',
    'imageUrl': 'http://localhost:5001/commonpantry.png'
  },
  {
    'id': 'Father\'s Heart Ministries',
    'name': 'Father\'s Heart Ministries',
    'imageUrl': 'http://localhost:5001/fathersheart.jpeg'
  },
  {
    'id': 'St. Joseph Soup Kitchen',
    'name': 'St. Joseph Soup Kitchen',
    'imageUrl': 'http://localhost:5001/stjoseph.jpg'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <DonationLists mockData={locations} />
      </div>
    );
  }
}

export default App;
