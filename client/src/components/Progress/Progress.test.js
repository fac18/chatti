import React from "react";
import { render } from "@testing-library/react";
import Progress from "./Progress";

test("includes Your Progress header", () => {
  const { getByText } = render(<Progress />);
  const headerElement = getByText(
    /Your Progress/i
  );
  expect(headerElement).toBeInTheDocument();
});
