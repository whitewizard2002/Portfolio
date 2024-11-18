import { cleanup, render, screen } from '@testing-library/react';
import { TextTyper } from '../../src/lib/components/TextTyper';
import React from 'react';

afterEach(() => {
  cleanup();
});

test('Testing if Texttyper is working as intended', () => {
  render(<TextTyper text="Test text" size="2" weight="bold" />);
  const element = screen.getByText('Test text');
  expect(element).toBeTruthy();
});
