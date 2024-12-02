import { cleanup, render, screen } from '@testing-library/react';
import { TextTyper } from '../../src/lib/components/TextTyper';
import React from 'react';
import { Row } from '../../src/lib/components/Row';
import '@testing-library/jest-dom';
import 'jest-styled-components';

afterEach(() => {
  cleanup();
});

test('unit test for Row.tsx', () => {
  render(
    <Row>
      <TextTyper text="Hello" size="12" weight="bold" color="#ffffff" />
    </Row>,
  );

  const element = screen.getByTestId('row-utest');
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();

  expect(element).toHaveStyleRule('display', 'flex');
  expect(element).toHaveStyleRule('flex-direction', 'row');
});
