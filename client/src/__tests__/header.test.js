import React from 'react'
import { render, cleanup, configure } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import Head from '../Header';

afterEach(cleanup);
configure({ testIdAttribute: 'test-id' });

const setup = () => {
  const { getByTestId } = render(<Head />);
  const form = getByTestId('header');
  return { form };
}

it('header is on the page', () => {
  const form = setup();
  expect(form).toBeTruthy();
});