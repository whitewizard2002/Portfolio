import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { TextTyper } from '../../src/lib/components/TextTyper';
import { Column } from '../../src/lib/components/Column'; // Import the Column component
import '@testing-library/jest-dom';
import 'jest-styled-components';

afterEach(() => {
  cleanup();
});

test('unit test for Column.tsx', () => {
  render(
    <Column>
      <TextTyper text="Hello" size="12" weight="bold" color="#ffffff" />
    </Column>,
  );

  const element = screen.getByTestId('column-utest');
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();

  expect(element).toHaveStyleRule('display', 'flex');
  expect(element).toHaveStyleRule('flex-direction', 'column');
});
