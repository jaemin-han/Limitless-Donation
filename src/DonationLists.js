import React, { Component } from 'react';

class DonationLists extends React.Component {
    render() {
        console.log('props', this.props)
        return (
            <ol>
                {this.props.mockData.map((location) => (
                    <li className='donation' key={location.id}>
                        <div style={{ backgroundImage: `url(${location.avatarURL})` }}>

                        </div>
                        <div>
                            {location.name}
                            {/* {location.imageUrl} */}
                        </div>
                    </li>
                ))}
            </ol>
        )    
    }
}

export default DonationLists;