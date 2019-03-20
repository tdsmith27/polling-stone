import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';

import 'jest-dom/extend-expect';
import PollMa from '../components/PollMap.js';

afterEach(cleanup);

it('Should render a map component', async () => {
<<<<<<< HEAD
    const map = render(<PollMa />,);
    // const map2 = await waitForElement(() => getByText(/map/i),)

=======
    const map = render(<PollMap />,);
>>>>>>> 82cc2f6949762aa15f306d2ce269d155a95b14db
    expect(map).toBeTruthy();
});