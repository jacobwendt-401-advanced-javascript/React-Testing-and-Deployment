import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('header.js', () => {
  it('should render a header', () => {
    const header = shallow(<Header />);
    expect(header.find('header').exists()).toBe(true);
  });
});