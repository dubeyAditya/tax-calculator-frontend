import React from 'react';
import Login from './Login';
import { render, fireEvent } from '../test-utils';

describe('<Login />', () => {
  let props;
  beforeEach(() => {
    props = {
      error: { isError: true, message: 'Error while testing' },
      onFormSubmit: jest.fn(),
    };
  });

  it('should render successfully', () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });

  it('should show error when passed as props', () => {
    const { getByTestId } = render(<Login {...props} />);
    expect(getByTestId('error').textContent).toBe(' Error while testing ');
  });

  it('should call onSubmit when Login Button is clicked', () => {
    const { getByTestId } = render(<Login {...props} />);
    fireEvent.click(getByTestId('login'));
    expect(props.onFormSubmit).toHaveBeenCalled();
  });
});
