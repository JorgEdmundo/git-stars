import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('Input Component', () => {
  let wrapper;
  const mockCallBack = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Input type="text" handleChange={mockCallBack} label="input" />,
    );
    jest.clearAllMocks();
  });

  it('should render a Input element', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should render a label for the Input', () => {
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('should have a Input type defined', () => {
    expect(wrapper.find('input').props().type).toEqual('text');
  });

  it('should have a handle function for the change event', () => {
    wrapper.find('input').simulate('change');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
