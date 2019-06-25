import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from './footer';

describe('footer.js', () => {
  it('should render a footer', () => {
    const footer = shallow(<Footer />);
    expect(footer.find('footer').exists()).toBe(true);
  });
});

it('matches snapshot without props', () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot();
});