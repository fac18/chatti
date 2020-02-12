import React from "react";
import { render } from "@testing-library/react";
import Register1 from "./Register1";

test("includes Your Name label", () => {
  const { getByText } = render(<Register1 />);
  const headerElement = getByText(
    /Your name:/i
  );
  expect(headerElement).toBeInTheDocument();
});
