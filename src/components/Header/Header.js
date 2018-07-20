import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchVisible: false
        }
    }

    // Toggle visibility when run on the state (method)
    showSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }

    render() {
        // Classes to add to the <input /> element
        let searchInputClasses = ['SearchInput'];

        // Update the class arry if the state is visible
        if (this.state.searchVisible) {
            searchInputClasses.push('active');
        }

        return (
            <div className='header'>
                <div className='menuIcon'>
                    <div className='dashTop'></div>
                    <div className='dashBottom'></div>
                    <div className='circle'></div>
                </div>
                <div className='fa fa-more'></div>

                <span className='title'>
                    {this.props.title}
                </span>

                <input
                    type='text'
                    className={searchInputClasses.join(' ')}
                    // className='SearchInput active'
                    placeholder='Search ...'
                />

                {/* Adding an onClick handler to call the showSearch button */}
                <div 
                    onClick={this.showSearch.bind(this)}
                    className='fa fa-search searchIcon'
                ></div>
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: 'Github Activity'
}

export default Header;