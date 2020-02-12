import React from "react";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";

test("includes introductory paragraph", () => {
  const { getByText } = render(<Homepage />);
  const headerElement = getByText(
    /Interactive ideas to inspire special moments with your little one everyday/i
  );
  expect(headerElement).toBeInTheDocument();
});
