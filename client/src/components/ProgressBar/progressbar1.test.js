import React from "react";
import ReactDOM from "react-dom";
import ProgressBar1 from "./ProgressBar1";


it("ProgressBar1 renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProgressBar1 />, div);
});

