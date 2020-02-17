import React from "react";
import { render } from "@testing-library/react";
import RegisterContainer from "./RegisterContainer";
import ReactDOM from "react-dom";


it("Register Container renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RegisterContainer />, div);
});