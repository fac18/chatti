import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("includes Email label", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Login />
    </Router>
  );
  const headerElement = getByText(/Email/i);
  expect(headerElement).toBeInTheDocument();
});
