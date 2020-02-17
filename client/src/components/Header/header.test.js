import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

it("Header renders without problems", () => {
  const history = createMemoryHistory();
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={history}>
      <Header />
    </Router>,
    div
  );
});
