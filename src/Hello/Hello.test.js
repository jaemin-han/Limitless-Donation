import React from 'react';
import Hello from './Hello';
import { shallow } from 'enzyme';

it('renders the name given', () => {
    const wrapper = shallow(<Hello name="Jaemin" />);
    expect(wrapper.find('p').text()).toEqual('Hello, Jaemin!');
})

it('uses "unknown" if no name is passed in', () => {
    const wrapper = shallow(<Hello/>);
    expect(wrapper.find('p').text()).toEqual('Hello, Unknown!');
});

// Shallow rendering will only render one level of components deep