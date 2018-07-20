import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        searchVisible: PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        }
    }

    render() {
        const { searchVisible } = this.state;
        let searchInputClasses = ['SearchInput'];
        if (this.state.searchVisible) {
            searchInputClasses.push('active')
        }

        return (
            <form className='header'>
                <input
                    type='search'
                    // className={searchClasses.join(' ')}
                    onChange={this.updateSearchInput.bind(this)}
                    placeholder='Search'
                />

                <div
                    onClick={this.showSearch.bind(this)}
                    className='fa fa-search searchIcon'
                >
                </div>
            </form>
        )
    }
}

export default SearchForm;