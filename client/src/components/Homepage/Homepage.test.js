import React from "react";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("Home page includes introductory paragraph", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Homepage />
    </Router>
  );
  const headerElement = getByText(
    /Interactive ideas to inspire special moments with your little one everyday/i
  );
  expect(headerElement).toBeInTheDocument();
});
