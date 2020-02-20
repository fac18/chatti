import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo_small.svg";
import { ReactComponent as BackButton } from "../../assets/svgs/arrow_go_back.svg";
import { ReactComponent as SettingsButton } from "../../assets/svgs/settings_cog.svg";
import * as SC from "./Header.style";
import { Link } from "react-router-dom";
import { Heading } from "../masterCss";



function Header({ buttons }) {
  return (
    <SC.Header>
      <div>
        {buttons && (
          <Link to="/home">
            <BackButton />
          </Link>
        )}
        <Link to="/home">
          
          <Logo className="svgTitle" />
          
        </Link>

        {buttons && (
          <Link to="/settings">
            <SettingsButton />
          </Link>
        )}
      </div>
    </SC.Header>
  );
}

export default Header;
