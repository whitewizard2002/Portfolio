import { cleanup, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/lib/theme/theme';
import React from 'react';
import { PurpleHexagon } from '../../src/lib/components/PurpleHexagon';
import 'jest-styled-components';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('unit test for PurpleHexagon.tsx', () => {
  render(
    <ThemeProvider theme={theme}>
      <PurpleHexagon />
    </ThemeProvider>,
  );

  const elementWrapper = screen.getByTestId('purplehexagonwrapper-utest');
  expect(elementWrapper).toBeTruthy();
  expect(elementWrapper).toBeInTheDocument();

  const innerElement = screen.getByTestId('hexagon-utest');
  expect(innerElement).toBeTruthy();
  expect(innerElement).toBeInTheDocument();
  expect(innerElement).toHaveStyleRule('height', '440px');
  expect(innerElement).toHaveStyleRule('width', '400px');
  expect(innerElement).toHaveStyleRule('background-color', '#5626C4');
});
