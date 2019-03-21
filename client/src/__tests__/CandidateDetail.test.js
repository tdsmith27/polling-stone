import React from 'react';
import { render, cleanup, configure } from 'react-testing-library';
import CandidateDetail from '../components/CandidateDetail.js';
import 'jest-dom/extend-expect';

afterEach(cleanup);
configure({ testIdAttribute: 'test-id'})
const setup = () => {
  const CanDs = render(<CandidateDetail />);
  const check = CanDs.getAllByTestId('ancestor');
  return check;
}
it('should render an ancestral div', () => {
  const parentDiv = setup();
  expect(parentDiv).toBeTruthy();
});