import React from "react";
import { render } from "@testing-library/react";
import FavouritesContainer from "./FavouritesContainer";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("includes Your Favourites header", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <FavouritesContainer />
    </Router>
  );
  const headerElement = getByText(/Your Favourites/i);
  expect(headerElement).toBeInTheDocument();
});
