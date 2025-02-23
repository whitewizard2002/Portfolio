import { cleanup, render, screen } from '@testing-library/react';
import { IntroSection } from '../../src/lib/components/IntroSection';
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('check if name is present', () => {
  // Write unit tests here
  const name = 'Aadit Harshal Baldha';
  render(<IntroSection name={name} />);
  const element = screen.getByText(name);
  expect(element).toBeTruthy();
  expect(element.textContent).toBe(name);
});

test('check if summary is present', () => {
  const summary =
    'I am a passionate Web Developer and Machine Learning student, constantly exploring the intersection of frontend development and AI-driven solutions. With a strong foundation in React.js, JavaScript, and modern web technologies, I build seamless user experiences while also delving into the world of machine learning to create intelligent and data-driven applications.';
  render(<p>{summary}</p>);
  const element = screen.getByText(summary);
  expect(element).toBeTruthy();
  expect(element.textContent).toBe(summary);
});

test('check if image is loading', () => {
  const url = '../../static/dp.jpeg';
  render(<img src={url} alt="Aadit Baldha" />);
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
});

test('check if bg image is rendering', () => {
  const url = '../../static/db_bg.png';
  render(<div style={{ backgroundImage: `url(${url})` }} />);
  const bgImage = screen.getByRole('div');
  expect(bgImage).toBeInTheDocument();
  expect(bgImage).toHaveStyleRule('background-image', `url(${url})`);
});
