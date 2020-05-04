import React from 'react';
import TaxCaclulator from './TaxCaclulator';

describe('<TaxCaclulator />', () => {
  it('should render successfully', () => {
    const wrapper = shallow(<TaxCaclulator />);
    expect(wrapper).toHaveLength(1);
  });
});
