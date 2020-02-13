import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Favourite from "../Favourite/Favourite";
import { Heading } from "../masterCss";

function FavouritesContainer() {
  //need to know list of user favourites
  //and add message if they have no favourites!

  return (
    <>
      <Header />
      <Heading whiteBg>Your Favourites</Heading>
      <Favourite />
      {/* map over list from db and render <Favourite /> */}
      <Navbar />
    </>
  );
}

export default FavouritesContainer;
