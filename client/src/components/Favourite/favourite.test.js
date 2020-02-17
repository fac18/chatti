import React from "react";
import ReactDOM from "react-dom";
import Favourite from "./Favourite";


it("Favourite component renders without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Favourite />, div);
});

