import React, { Component } from 'react';

class DonationLists extends React.Component {
    render() {
        console.log("props", this.props)
        return (
            <ol className="contact-list">
                {this.props.mockData.map((place) => (
                    <li key={place.id}>
                        {place.name}
                    </li>
                ))}
            </ol>
        )    
    }
}

export default DonationLists;