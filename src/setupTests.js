import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Enzyme is a suite of test utilities for testing React that 
// makes it incredibly easy to render, search and make
// assertions on components