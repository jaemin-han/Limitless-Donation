import React, { Component } from 'react';
import DonationLists from './DonationLists';

class App extends Component {
  state = {
    locations: [
      {
        'id': 'commonpantry',
        'name': 'NY Common Pantry',
        'email': 'nycommonpantry@gmail.com',
        'imageURL': 'http://localhost:5001/commonpantry.png'
      },
      {
        'id': 'fathersheart',
        'name': 'Father\'s Heart',
        'email': 'fathersheart@gmail.com',
        'imageURL': 'http://localhost:5001/fathersheart.jpeg'
      },
      {
        'id': 'stjoseph',
        'name': 'St. Joseph',
        'email': 'stjoseph@gmail.com',
        'imageURL': "http://localhost:5001/stjoseph.jpg"
      }
    ]
  }

  removeLocation = (location) => {
    this.setState((currentState) => ({
      locations: currentState.locations.filter((c) => {
        return c.id !== location.id
      })
    }))
  }
  render() {
    return (
      <div>
        <DonationLists 
          locations={this.state.locations}
          onDeleteLocation={this.removeLocation}
        />
          
      </div>
    );
  }
}

export default App;