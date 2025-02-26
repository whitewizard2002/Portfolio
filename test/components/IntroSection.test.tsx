import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { IntroSection } from '../../src/lib/components/IntroSection';
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import ThemeProvider from 'styled-components';
import { theme } from '../../src/lib/theme/theme';
afterEach(() => {
  cleanup();
});

jest.mock('../../static/dp.jpeg', () => 'mocked_dp.jpeg');
jest.mock('../../static/db_bg.png', () => 'mocked_db_bg.png');

test('unit test for IntroSection.tsx', () => {
  // Write unit tests here
  const name = 'Aadit Harshal Baldha';
  const summary =
    'I am a passionate Web Developer and Machine Learning student,constantly exploring the intersection of frontend development and AI-driven solutions. With a strong foundation in React.js, JavaScript, and modern web technologies, I build seamless user experiences while also delving into the world of machine learning to create intelligent and data-driven applications.';

  render(
    <ThemeProvider theme={theme}>
      <IntroSection name={name} />
    </ThemeProvider>,
  );
  const element = screen.getByText(name);
  expect(element).toBeTruthy();
  expect(element.textContent).toBe(name);
  expect(element).toContainElement(screen.getByTestId('Dp-wrapper-test-id'));
  expect(element).toContainElement(screen.getByTestId('Info-wrapper-test-id'));

  const DpWrapper = screen.getByTestId('Dp-wrapper-test-id');
  expect(DpWrapper).toBeTruthy();
  expect(DpWrapper).toContainElement(screen.getByTestId('Dp-img-test-id'));

  const DpImage = screen.getByTestId('Dp-img-test-id');
  expect(DpImage).toBeTruthy();
  expect(DpImage).toHaveStyle('animation: 1.5s fadeIn ease-out forwards');

  const InfoWrapper = screen.getByTestId('Info-wrapper-test-id');
  expect(InfoWrapper).toBeTruthy();
  expect(InfoWrapper).toContainElement(
    screen.getByTestId('Name-wrapper-test-id'),
  );

  const NameWrapper = screen.getByTestId('Name-wrapper-test-id');
  expect(NameWrapper).toBeTruthy();
  expect(NameWrapper).toContainElement(
    screen.getByTestId('Name-texttyper-test-id'),
  );
  expect(NameWrapper).toHaveProperty('onAnimationEnd');
  expect(NameWrapper).toHaveStyleRule(
    'animation',
    expect.stringContaining('0.75s ease-out forwards'),
  );
  fireEvent.animationEnd(NameWrapper);

  const NameTextTyper = screen.getByTestId('Name-texttyper-test-id');
  expect(NameTextTyper).toBeTruthy();
  expect(NameTextTyper.textContent).toBe(name);

  const SummaryWrapper = screen.getByTestId('summaryWrapper-test-id');
  expect(SummaryWrapper).toBeTruthy();
  expect(SummaryWrapper.textContent).toBe(summary);
});
