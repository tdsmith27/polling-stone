import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import StateId from '../components/stateId';

afterEach(cleanup);

it('should have an in person card component', async () => {
  const {getByText} = render(<StateId />);

  const inPersonCard = await waitForElement(() => getByText(/In-person Voting/))

  expect(inPersonCard).toBeTruthy();
});

it('should have an absentee card component', async () => {
  const {getByText} = render(<StateId />);

  const absenteeCard = await waitForElement(() => getByText(/Absentee Voting/))

  expect(absenteeCard).toBeTruthy();
});
