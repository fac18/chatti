import React from "react";
import { render } from "@testing-library/react";
import HomeLoggedIn from "./HomeLoggedIn";

test("includes Your next activity header", () => {
  const { getByText } = render(<HomeLoggedIn />);
  const headerElement = getByText(
    /Your next activity:/i
  );
  expect(headerElement).toBeInTheDocument();
});
