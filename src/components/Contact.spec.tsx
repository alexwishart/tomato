import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Contact from './Contact';
import { act } from 'react-dom/test-utils';
import { submitContactDetails } from '../utils/backendUtils';

jest.mock('../utils/backendUtils');

afterEach(() => {
  jest.clearAllMocks();
});

describe('The Contact component', () => {
  it('should render correctly', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });

  it('should call the backend with the correct values when submit is clicked', () => {
    const { getByLabelText, getByText } = render(<Contact />);
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('E-mail');
    const submitButton = getByText('Submit');

    act(() => {
      fireEvent.change(nameInput, { target: { value: 'name' } });
    });

    act(() => {
      fireEvent.change(emailInput, { target: { value: 'name@test.com' } });
    });

    fireEvent.click(submitButton);
    expect(submitContactDetails).toHaveBeenCalledWith('name', 'name@test.com');
  });
});
