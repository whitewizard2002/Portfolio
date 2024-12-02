import { cleanup, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/lib/theme/theme';
import React from 'react';
import { PinkCircle } from '../../src/lib/components/PinkCircle';
import 'jest-styled-components';

afterEach(() => {
  cleanup();
});

test('unit test for PinkCircle.tsx', () => {
  render(
    <ThemeProvider theme={theme}>
      <PinkCircle />
    </ThemeProvider>,
  );

  const elementWrapper = screen.getByTestId('pinkcirclewrapper-utest');
  expect(elementWrapper).toBeTruthy();
  expect(elementWrapper).toHaveStyleRule('width', '375px');
  expect(elementWrapper).toHaveStyleRule('height', '375px');

  const innerElement = screen.getByTestId('circlecontent-utest');
  expect(innerElement).toBeTruthy();
  expect(innerElement).toHaveStyleRule('background', '#E60576');
  expect(innerElement).toHaveStyleRule('border-radius', '50%');
  expect(innerElement).toHaveStyleRule('width', '100%');
  expect(innerElement).toHaveStyleRule('height', '100%');
});
