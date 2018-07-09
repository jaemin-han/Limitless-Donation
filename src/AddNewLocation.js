import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddNewLocation extends Component {
    render() {
        return (
            <div>
                <Link
                    to='/'>
                    Go Back
                </Link>
                <h1>Create a Location</h1>
                <p>TESTING</p>

            </div>
        )
    }
}

export default AddNewLocation;