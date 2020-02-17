import React from "react";
import { render } from "@testing-library/react";
import Register2 from "./Register2";
import ReactDOM from "react-dom";


test("includes What is your child's name? label", () => {
  const { getByText } = render(<Register2 />);
  const headerElement = getByText(
    /What is your child's name?/i
  );
  expect(headerElement).toBeInTheDocument();
});

it("Register2 renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Register2 />, div);
});

