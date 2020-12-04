import React from 'react';
import { render } from '@testing-library/react';
import NutritionalInfo from './NutritionalInfo';
import { nutritionalInfoContent } from '../content/nutritionalInfo';

describe('The NutritionalInfo component', () => {
  it('should render correctly', () => {
    expect(render(<NutritionalInfo />)).toMatchSnapshot();
  });

  it('should redirect to the usda website when the footer link is clicked', () => {
    const { getByText } = render(<NutritionalInfo />);

    expect(getByText(nutritionalInfoContent.footer.link.text).href).toBe(
      nutritionalInfoContent.footer.link.href
    );
  });
});
