import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';

import 'jest-dom/extend-expect';
import PollMap from '../components/PollMap.js';

afterEach(cleanup);

it('Should render a map component', async () => {
    const map = render(<PollMap />,);
    console.log('we in diss bitch')
    // const map2 = await waitForElement(() => getByText(/map/i),)

    // expect(map).toBeTruthy();
});