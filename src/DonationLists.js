import React, { Component }from 'react';
import PropTypes from 'prop-types';

class DonationLists extends Component {
    //PropTypes to a class Component
    static propTypes = {
        locations: PropTypes.array.isRequired,
        onDeleteLocation: PropTypes.func.isRequired
    }
    
    state = {
        search: ''
    }

    updateSearch = (search) => {
        this.setState(() => ({
            search: search.trim()
        }))
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
                <div className=''>
                    <input
                        className="search-contacts"
                        type="text"
                        placeholder="Search Contacts"
                        value={search}
                        onChange={(event) => this.updateSearch(event.target.value)}
                    />
                </div>
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

export default DonationLists