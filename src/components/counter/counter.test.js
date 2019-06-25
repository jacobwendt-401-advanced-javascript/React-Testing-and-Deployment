import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Counter from './counter';

describe('counter.js', () => {
  it('matches snapshot without prowps', () => {
    const tree = renderer.create(<Counter />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('should render an <a> for "up" and "down"', () => {
    const counter = shallow(<Counter />);
    expect(counter.find('.up').exists()).toBe(true);
    expect(counter.find('.down').exists()).toBe(true);
  });

it('should increment correctly when clicked', () => {
  const counter = mount(<Counter />);
  let button = counter.find('.up');

  button.simulate('click');

  expect(counter.state('count')).toEqual(1)
  
  button.simulate('click');
  button.simulate('click');
  button.simulate('click');
  button.simulate('click');

  expect(counter.state('count')).toEqual(5)
  });

it('should decrement correctly when clicked', () => {
  const counter = mount(<Counter />);
  let button = counter.find('.down');

  button.simulate('click');

  expect(counter.state('count')).toEqual(-1)
  
  button.simulate('click');
  button.simulate('click');
  button.simulate('click');
  button.simulate('click');

  expect(counter.state('count')).toEqual(-5)
  });
});