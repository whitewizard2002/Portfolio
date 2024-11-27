import { cleanup, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/lib/theme/theme';
import React from 'react';
import { YellowTriangle } from '../../src/lib/components/YellowTriangle';
import 'jest-styled-components';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('unit test for YellowTriangle.tsx', () => {
  render(
    <ThemeProvider theme={theme}>
      <YellowTriangle />
    </ThemeProvider>,
  );

  const elementWrapper = screen.getByTestId('yellowtrianglewrapper-utest');
  expect(elementWrapper).toBeTruthy();
  expect(elementWrapper).toBeInTheDocument();

  const innerElement = screen.getByTestId('triangle-utest');
  expect(innerElement).toBeTruthy();
  expect(innerElement).toBeInTheDocument();
  expect(innerElement).toHaveStyleRule('width', '0');
  expect(innerElement).toHaveStyleRule('height', '0');
  expect(innerElement).toHaveStyleRule(
    'border-left',
    '200px solid transparent',
  );
  expect(innerElement).toHaveStyleRule(
    'border-right',
    '200px solid transparent',
  );
  expect(innerElement).toHaveStyleRule('border-bottom', '200px solid #facd3d');
});
