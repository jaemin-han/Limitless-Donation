import React, { Component } from 'react';
import DonationLists from './DonationLists';

const locations = [
  { 
    "id": "NY Common Pantry",
    "name": "NY Common Pantry"
  },
  {
    "id": "Father's Heart Ministries",
    "name": "Father's Heart Ministries"
  },
  {
    "id": "St. Joseph Soup Kitchen",
    "name": "St. Joseph Soup Kitchen"
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
