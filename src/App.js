import React, { Component } from 'react';
import DonationLists from './DonationLists';
import Clock from './Clock/Clock';
import * as LocationsAPI from './router/LocationsAPI';
import AddNewLocation from './AddNewLocation';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
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

        <Clock />
      </div>
    );
  }
}

export default App;