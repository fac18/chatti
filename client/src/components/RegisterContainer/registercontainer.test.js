import React from "react";
import { render } from "@testing-library/react";
import RegisterContainer from "./RegisterContainer";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

it("Register Container renders without problems", () => {
  const history = createMemoryHistory();
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={history}>
      {" "}
      <RegisterContainer />
    </Router>,
    div
  );
});
