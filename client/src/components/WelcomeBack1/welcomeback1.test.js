import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import WelcomeBack1 from "./WelcomeBack1";
import WelcomeBack2 from "../WelcomeBack2/WelcomeBack2";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

it("WelcomeBack1 renders without problems", () => {
  const history = createMemoryHistory();
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={history}>
      <WelcomeBack1 />
    </Router>,
    div
  );
});
