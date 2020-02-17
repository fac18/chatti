import React from "react";
import { render } from "@testing-library/react";
import WelcomeBack2 from "./WelcomeBack2";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("WelcomeBack2 component includes Great! header", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <WelcomeBack2 />
    </Router>
  );
  const headerElement = getByText(/Great!/i);
  expect(headerElement).toBeInTheDocument();
});
