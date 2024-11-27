import { cleanup, render, screen } from '@testing-library/react';
import { Circle } from '../../src/lib/components/Circle';
import React from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

afterEach(() => {
  cleanup();
});

test('unit test for Circle.tsx', () => {
  const position = { x: 0, y: 0 };
  render(
    <Circle
      data-testid="circle-utest"
      size={20}
      opacity={1}
      position={position}
    />,
  );

  const element = screen.getByTestId('circle-utest');
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();

  expect(element).toHaveStyleRule('width', '20px');
  expect(element).toHaveStyleRule('height', '20px');
  expect(element).toHaveStyleRule('opacity', '1');
  expect(element).toHaveStyleRule('top', '-10px');
  expect(element).toHaveStyleRule('left', '-10px');
});
