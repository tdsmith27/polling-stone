import React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import CandidateCards from '../components/CandidateCards';

afterEach(cleanup);

it('should have cards with a candidates name', async () => {
    const { getByText } = render(<CandidateCards />);

    const name = await waitForElement(() => getByText(/Donald Trump/i))

    expect(name).toBeTruthy();
});

it('should have cards with a candidates party', async () => {
    const { getByText } = render(<CandidateCards />);

    const party = await waitForElement(() => getByText(/Democrat/i))

    expect(party).toBeTruthy();
});