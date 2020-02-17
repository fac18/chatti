import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

it("Button renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});


