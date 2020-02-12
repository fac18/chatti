import React from "react";
import { render } from "@testing-library/react";
import WelcomeBack2 from "./WelcomeBack2";

test("includes Great! header", () => {
  const { getByText } = render(<WelcomeBack2 />);
  const headerElement = getByText(
    /Great!/i
  );
  expect(headerElement).toBeInTheDocument();
});
