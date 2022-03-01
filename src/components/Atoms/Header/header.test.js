import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Header from './Header';

describe('Header Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
    jest.clearAllMocks();
  });

  it('should render the header', () => {
    expect(wrapper.find('.header')).toHaveLength(1);
  });

  it('should render a h1 tag', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render two buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  });

  it('should have the home link', () => {
    expect(wrapper.find(Link).at(0).props().to).toBe('/');
    expect(wrapper.find(Link).at(1).props().to).toBe('/');
  });

  it('should have the starred link', () => {
    expect(wrapper.find(Link).at(2).props().to).toBe('/starred');
  });
});
