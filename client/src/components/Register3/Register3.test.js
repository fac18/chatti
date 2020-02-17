import React from "react";
import { render } from "@testing-library/react";
import Register3 from "./Register3";
import ReactDOM from "react-dom";


test("includes How often do you want to get new ideas? label", () => {
  const { getByText } = render(<Register3 />);
  const headerElement = getByText(
    /How often do you want to get new ideas?/i
  );
  expect(headerElement).toBeInTheDocument();
});

it("Register3 renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Register3 />, div);
});

