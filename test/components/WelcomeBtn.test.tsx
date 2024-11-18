import { WelcomeBtn } from '../../src/lib/components/WelcomeBtn';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

afterEach(() => {
  cleanup();
});

test('check if text is present or not in the dom', () => {
  render(<WelcomeBtn text="Welcome" />);
  const element = screen.getByTestId('welcomebtn-test');
  expect(element.textContent).toBe('Welcome');
});
