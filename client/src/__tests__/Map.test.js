import React from "react";
import {
  render,
  cleanup,
} from "react-testing-library";

import "jest-dom/extend-expect";
import PollMap from "../components/PollMap.js";

afterEach(cleanup);

it("Should render a map component", async () => {
  const map = render(<PollMap />);
  expect(map).toBeTruthy();
});
