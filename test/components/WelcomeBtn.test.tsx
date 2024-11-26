import { WelcomeBtn } from '../../src/lib/components/WelcomeBtn';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('check if text is present or not in the dom', () => {
  const handleClick = jest.fn();
  render(<WelcomeBtn text="Welcome" onClick={handleClick} />);
  const element = screen.getByText('Welcome');
  expect(element.textContent).toBe('Welcome');
  expect(element).toHaveProperty('onclick');
  fireEvent.click(element);
  expect(handleClick).toHaveBeenCalled();
});
