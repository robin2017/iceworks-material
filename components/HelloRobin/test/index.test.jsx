import React from 'react';
import { shallow } from 'enzyme';
import HelloRobin from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<HelloRobin />);
  expect(wrapper.find('.HelloRobin').length).toBe(1);
});
