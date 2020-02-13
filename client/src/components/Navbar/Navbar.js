import React from "react";
import * as SC from "./Navbar.style";
import { ReactComponent as AboutUsButton } from "../../assets/svgs/nav_icon_about.svg";
import { ReactComponent as FavouriteButton } from "../../assets/svgs/nav_icon_fav.svg";
import { ReactComponent as CommunityButton } from "../../assets/svgs/nav_icon_community.svg";
import { ReactComponent as ProgressButton } from "../../assets/svgs/nav_icon_progress.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <SC.Navbar>
      <nav>
        <ul>
          <SC.StyledLink to="/aboutus">
            <li>
              <AboutUsButton />
              <p>About Us</p>
            </li>
          </SC.StyledLink>
          <SC.StyledLink to="/favourites">
            <li>
              <FavouriteButton />
              <p>Favourites</p>
            </li>
          </SC.StyledLink>
          <li>
            <CommunityButton />
            <p>Community</p>
          </li>
          <SC.StyledLink to="/progress">
            <li>
              <ProgressButton />
              <p>Progress</p>
            </li>
          </SC.StyledLink>
        </ul>
      </nav>
    </SC.Navbar>
  );
}

export default Navbar;
