import React from 'react'
import { render, fireEvent, cleanup, waitForElement, configure } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import RegCheckForm from '../regCheckForm';

afterEach(cleanup);
configure({ testIdAttribute: 'test-id' });

const setup = () => {
  const { getByTestId } = render(<RegCheckForm />);
  const form = getByTestId('regCheckForm');
  return { form };
}

it('iframe is on the page', () => {
  const form = setup();
  expect(form).toBeTruthy();
});