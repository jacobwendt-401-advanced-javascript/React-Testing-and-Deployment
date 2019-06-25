import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Header from './header';

describe('header.js', () => {
  it('should render a header', () => {
    const header = shallow(<Header />);
    expect(header.find('header').exists()).toBe(true);
  });

  it('matches snapshot without props', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot();
  });
});

