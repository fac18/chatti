import React from "react";
import { render } from "@testing-library/react";
import FavouritesContainer from "./FavouritesContainer";

test("includes Your Favourites header", () => {
  const { getByText } = render(<FavouritesContainer />);
  const headerElement = getByText(
    /Your Favourites/i
  );
  expect(headerElement).toBeInTheDocument();
});
