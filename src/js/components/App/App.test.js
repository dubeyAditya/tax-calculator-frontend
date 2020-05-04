import React from 'react';
// import { shallow } from 'enzyme';
import { App } from './App';
import Header from '../../atoms/Header';
import Main from '../../atoms/Main';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render successfully', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render header and main', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(1);
  });
});
