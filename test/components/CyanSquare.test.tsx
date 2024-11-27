import { cleanup, render, screen } from '@testing-library/react';
import { CyanSquare } from '../../src/lib/components/CyanSquare';
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/lib/theme/theme';

afterEach(() => {
  cleanup();
});

test('unit test for CyanSquare.tsx', () => {
  render(
    <ThemeProvider theme={theme}>
      <CyanSquare />
    </ThemeProvider>,
  );

  const element = screen.getByTestId('cyansquare-utest');
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();

  expect(element).toHaveStyleRule('width', '400px');
  expect(element).toHaveStyleRule('height', '400px');
  expect(element).toHaveStyleRule('background-color', '#2cccc3');
});
