import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Favourite from "../Favourite/Favourite";

function FavouritesContainer() {
  //need to know list of user favourites
  //and add message if they have no favourites!

  return (
    <>
      <Header />
      <h1>Your Favourites</h1>
      {/* map over list from db and render <Favourite /> */}
      <Navbar />
    </>
  );
}

export default FavouritesContainer;
