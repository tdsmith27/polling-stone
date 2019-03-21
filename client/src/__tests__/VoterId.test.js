import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import VoterId from '../components/VoterID.js';

afterEach(cleanup);

it('should have a select box', async () => {
  const {getByText} = render(<VoterId />);

  const selectBox = await waitForElement(() => getByText(/ant-select-lg/))

  expect(selectBox).toBeTruthy();
});
