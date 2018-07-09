import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DonationLists extends Component {
    //PropTypes to a class Component
    static propTypes = {
        locations: PropTypes.array.isRequired,
        onDeleteLocation: PropTypes.func.isRequired
    }
    
    // Babel will transpile and add a constructor behind the scene
    state = {
        search: ''
    }

    updateSearch = (search) => {
        this.setState(() => ({
            search: search.trim()
        }))
    }

    clearSearch = () => {
        this.updateSearch('')
    }

    render() {
        const { search } = this.state
        const { locations, onDeleteLocation } = this.props

        const showingAllOrganization = search === ''
            ? locations
            : locations.filter((update) => (
                update.name.toLowerCase().includes(search.toLowerCase())
            ))

        return (
            <div>
                {/* {JSON.stringify(this.state)} */}
                <div className='list-organization-top'>
                    <input
                        className="search-organizations"
                        type="text"
                        placeholder="Click to search your organization"
                        value={search}
                        onChange={(event) => this.updateSearch(event.target.value)}
                    />
                </div>
                <div className='list-organization-middle'>
                    <div className='button-items'>
                        <p className='new-organization'>Modal Message</p>
                    </div>
                    <div className='button-items'>
                        <Link to='/create'>
                            <p className='new-organization'>Add Location</p>
                        </Link>
                    </div>
                </div>


                {showingAllOrganization.length !== locations.length && (
                    <div className="show-all-organization">
                        <span>Now showing {showingAllOrganization.length} of {locations.length}</span>
                        <button onClick={this.clearSearch}>Show All Locations</button>
                    </div>
                )}

                <div className='charity-list'>
                    {showingAllOrganization.map((location) => (
                        <li key={location.id} className='charity-list-item'>
                            <div
                                className='org-image'
                                style={{
                                    backgroundImage: `url(${location.imageURL})`
                                }}
                            ></div>
                            <div className='organization-details'>
                                <p>{location.name}</p>
                                <p>{location.email}</p>
                            </div>
                            <button 
                                onClick={() => onDeleteLocation(location)}
                                className='organiation-remove'>
                                    Remove
                            </button>
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}

export default DonationLists;