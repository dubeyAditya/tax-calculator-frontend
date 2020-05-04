import React from 'react';
// import { shallow } from 'enzyme';
import { App } from './App';
import Header from '../../atoms/Header';
import Main from '../../atoms/Main';
import Login from '../Login';
import Signup from '../Signup';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render successfully', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render Header and Main', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(1);
  });

  it('should have Login as Default Screen', () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should not have Signup as Default Screen', () => {
    expect(wrapper.find(Signup)).toHaveLength(0);
  });
});
