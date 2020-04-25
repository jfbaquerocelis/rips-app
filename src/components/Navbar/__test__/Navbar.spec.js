import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../index';

describe('Navbar component', () => {
  it('should render a component', () => {
    const wrapper = shallow(React.createElement(Navbar));

    expect(wrapper).toMatchSnapshot();
  });
});
