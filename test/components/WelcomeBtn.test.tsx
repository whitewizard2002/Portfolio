import { WelcomeBtn } from '../../src/lib/components/WelcomeBtn';
import { render, screen } from '@testing-library/react';
import React from 'react';
test('check if text is present or not in the dom', () => {
  render(<WelcomeBtn text="Welcome" />);
  const element = screen.getAllByTestId('welcomebtn-test');
  expect(element).toBe('Welcome');
});
