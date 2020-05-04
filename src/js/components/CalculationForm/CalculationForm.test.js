import React from 'react';
import CalculationForm from './CalculationForm';

describe('<CalculationForm />', () => {
  it('should render successfully', () => {
    const wrapper = shallow(<CalculationForm />);
    expect(wrapper).toHaveLength(1);
  });
});
