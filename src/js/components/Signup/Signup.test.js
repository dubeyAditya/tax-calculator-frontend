import React from 'react';
import Signup from './Signup';
import { render } from '../test-utils';

describe('<Signup />', () => {
  it('should render successfully', () => {
    const { container } = render(<Signup />);
    expect(container).toBeInTheDocument();
  });
});
