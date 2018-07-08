import React from 'react'
import PropTypes from 'prop-types'

function DonationLists (props) {
    return (
        <ol className="charity-list">
            {props.locations.map((location) => (
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
                        onClick={() => props.onDeleteLocation(location)}
                        className='organiation-remove'>
                            Remove
                    </button>
                </li>
            ))}
        </ol>
    )
}

DonationLists.propTypes = {
    locations: PropTypes.array.isRequired,
    onDeleteLocation: PropTypes.func.isRequired
}

export default DonationLists