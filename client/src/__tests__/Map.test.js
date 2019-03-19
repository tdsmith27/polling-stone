import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';

import 'jest-dom/extend-expect';
import PollMa from '../components/PollMap.js';

afterEach(cleanup);

it('Should render a map component', async () => {
    const map = render(<PollMa />,);
    // const map2 = await waitForElement(() => getByText(/map/i),)

    expect(map).toBeTruthy();
});