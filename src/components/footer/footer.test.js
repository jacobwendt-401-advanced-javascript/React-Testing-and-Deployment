import React from 'react';
import { shallow } from 'enzyme';

import Footer from './footer';

describe('footer.js', () => {
  it('should render a footer', () => {
    const footer = shallow(<Footer />);
    expect(footer.find('footer').exists()).toBe(true);
  });
});