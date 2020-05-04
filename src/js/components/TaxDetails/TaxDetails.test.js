import React from 'react';
import TaxDetails from './TaxDetails';

describe('<TaxDetails />', () => {
  it('should render successfully', () => {
    const wrapper = shallow(<TaxDetails />);
    expect(wrapper).toHaveLength(1);
  });
});
