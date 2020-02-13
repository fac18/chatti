import React from "react";
import { render } from "@testing-library/react";
import Progress from "./Progress";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("includes Your Progress header", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Progress />
    </Router>
  );
  const headerElement = getByText(/Your Progress/i);
  expect(headerElement).toBeInTheDocument();
});
