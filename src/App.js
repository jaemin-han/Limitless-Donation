import React, { Component } from 'react';
import DonationLists from './DonationLists';
import * as LocationsAPI from './router/LocationsAPI';
import AddNewLocation from './AddNewLocation';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    // locations: [
    //   {
    //     'id': 'commonpantry',
    //     'name': 'NY Common Pantry',
    //     'email': 'nycommonpantry@gmail.com',
    //     'imageURL': 'http://localhost:5001/commonpantry.png'
    //   },
    //   {
    //     'id': 'fathersheart',
    //     'name': 'Father\'s Heart',
    //     'email': 'fathersheart@gmail.com',
    //     'imageURL': 'http://localhost:5001/fathersheart.jpeg'
    //   },
    //   {
    //     'id': 'stjoseph',
    //     'name': 'St. Joseph',
    //     'email': 'stjoseph@gmail.com',
    //     'imageURL': "http://localhost:5001/stjoseph.jpg"
    //   }
    // ]
    locations: []
  }

  componentDidMount() {
    LocationsAPI.getAll()
      .then((locations) => {
        this.setState(() => ({
          locations
        }))
      })
  }

  removeLocation = (location) => {
    this.setState((currentState) => ({
      locations: currentState.locations.filter((c) => {
        return c.id !== location.id
      })
    }))

    LocationsAPI.remove(location)
  }

  createLocation = (location) => {
    LocationsAPI.create(location)
    .then((location) => {
      this.setState((currentState) => ({
        locations: currentState.locations.concat([location])
      }))
    })
  }

  render() {
    return (
      <div>
        <span className="logo">#Limitless Donation</span>
        
        <Route exact path='/' render={() => (
          <DonationLists 
            locations={this.state.locations}
            onDeleteLocation={this.removeLocation}
            // onNavigate={() => {
            //   this.setState(() => ({
            //     screen: 'create'
            //   }))
            // }}
          />
        )}
        />

        <Route path='/create' render={({ history }) => (
          <AddNewLocation
            NewLocation={( location ) => {
              this.createLocation(location)
              history.push('/')
            }}
          />
        )}/>
      </div>
    );
  }
}

export default App;