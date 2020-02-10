import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders home page text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /Interactive ideas to inspire special moments/i
  );
  expect(linkElement).toBeInTheDocument();
});
