import React from "react";
import { render } from "@testing-library/react";
import Register1 from "./Register1";
import ReactDOM from "react-dom";

test("includes Your Name label", () => {
  const { getByText } = render(<Register1 />);
  const headerElement = getByText(
    /Your name:/i
  );
  expect(headerElement).toBeInTheDocument();
});


it("Register1 renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Register1 />, div);
});

