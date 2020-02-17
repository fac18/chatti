import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import WelcomeBack1 from "./WelcomeBack1";
import WelcomeBack2 from "../WelcomeBack2/WelcomeBack2";



it("WelcomeBack1 renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WelcomeBack1 />, div);
});


