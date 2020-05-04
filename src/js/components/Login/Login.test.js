import React from 'react';
import Login from './Login';
import { render } from '../test-utils';

describe('<Login />', () => {
  it('should render successfully', () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });
});
