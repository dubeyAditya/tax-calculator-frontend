import React from 'react';
import { render } from '@testing-library/react';
import Signup from './Signup';

describe('<Signup />', () => {
  it('should render successfully', () => {
    const { container } = render(<Signup />);
    expect(container).toBeInTheDocument();
  });
});
