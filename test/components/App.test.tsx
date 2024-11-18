import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../src/App';

afterEach(() => {
  cleanup();
});

test('should render App component and contain welcome and know about me text inside', () => {
  render(<App />);
  const appContent = screen.getByText('Welcome');
  const appContent_2 = screen.getByText('Know about me');
  expect(appContent.textContent).toBe('Welcome');
  expect(appContent_2.textContent).toBe('Know about me');
});
