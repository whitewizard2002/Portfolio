import { cleanup, render, screen } from '@testing-library/react';
import { TextTyper } from '../../src/lib/components/TextTyper';
import React from 'react';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('Testing if Texttyper is working as intended', () => {
  render(<TextTyper text="Test text" size="2" weight="bold" color="#ffffff" />);
  const element = screen.getByText('Test text');
  expect(element).toHaveAttribute('size', '2');
  expect(element).toHaveAttribute('weight', 'bold');
  expect(element).toHaveAttribute('color', '#ffffff');

  expect(element).toBeTruthy();
});
