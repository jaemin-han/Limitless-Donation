// This component is for TESTING PURPOSES (Enzyme)

import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => {
    return <p>Hello, {props.name || 'Unknown'}!</p>;
}

// Most of the time when working with React Components I'll use the defaultProps object
// to define the defaults

Hello.propTypes = {
    name: PropTypes.string,
};

Hello.dafaultProps = {
    name: 'Unknown',
}

export default Hello;