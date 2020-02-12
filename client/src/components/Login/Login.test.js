import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

test("includes Email label", () => {
  const { getByText } = render(<Login />);
  const headerElement = getByText(
    /Email/i
  );
  expect(headerElement).toBeInTheDocument();
});
