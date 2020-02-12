import React from "react";
import { render } from "@testing-library/react";
import AboutUsContent from "./AboutUsContent";

test("renders About Us headerq", () => {
  const { getByText } = render(<AboutUsContent />);
  const headerElement = getByText(
    /About Us/i
  );
  expect(headerElement).toBeInTheDocument();
});
