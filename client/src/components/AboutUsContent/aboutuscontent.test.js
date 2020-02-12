import React from "react";
import { render } from "@testing-library/react";
import AboutUsContent from "./AboutUsContent";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("renders About Us header", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <AboutUsContent />
    </Router>
  );
  const headerElement = getByText(/About Us/i);
  expect(headerElement).toBeInTheDocument();
});
