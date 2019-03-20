import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import VoterInfoDetail from '../components/VoterInfoDetail';

afterEach(cleanup);

it('should have a What to Bring card', async () => {
    const { getByText } = render(<VoterInfoDetail />);

    const WhatToBring = await waitForElement(() => getByText(/What to bring/i))

    expect(WhatToBring).toBeTruthy();
});


it('should have a How and Where to vote card', async () => {
    const { getByText } = render(<VoterInfoDetail />);

    const HowToVote = await waitForElement(() => getByText(/How and Where to vote/i))

    expect(HowToVote).toBeTruthy();
});

it('should have a Register to Vote card', async () => {
    const { getByText } = render(<VoterInfoDetail />);

    const RegisterToVote = await waitForElement(() => getByText(/Register to Vote/i))

    expect(RegisterToVote).toBeTruthy();
});