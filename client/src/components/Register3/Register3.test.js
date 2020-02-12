import React from "react";
import { render } from "@testing-library/react";
import Register3 from "./Register3";

test("includes How often do you want to get new ideas? label", () => {
  const { getByText } = render(<Register3 />);
  const headerElement = getByText(
    /How often do you want to get new ideas?/i
  );
  expect(headerElement).toBeInTheDocument();
});
