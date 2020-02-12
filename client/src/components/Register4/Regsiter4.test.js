import React from "react";
import { render } from "@testing-library/react";
import Register4 from "./Register4";

test("includes Great! header", () => {
  const { getByText } = render(<Register4 />);
  const headerElement = getByText(
    /Great!/i
  );
  expect(headerElement).toBeInTheDocument();
});
