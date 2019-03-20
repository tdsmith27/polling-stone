import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";

// this adds custom jest matchers from jest-dom
import "jest-dom/extend-expect";
import App from "../App";

afterEach(cleanup);

it("should render", async () => {
  const { getByText } = render(<App />);
  const text = await waitForElement(() => getByText(/Candidates/));
  expect(text).toBeTruthy();
});

it("should render an ant card", async () => {
  const { getByText } = render(<App />);
  const text = await waitForElement(() => getByText(/Candidates/));
  expect.stringContaining("ant-card");
});

it("should render an image", async () => {
  const { getByText } = render(<App />);
  const text = await waitForElement(() => getByText(/Candidates/));
  expect.stringContaining("img");
});
