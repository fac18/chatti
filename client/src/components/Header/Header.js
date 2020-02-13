import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo_small.svg";
import { ReactComponent as BackButton } from "../../assets/svgs/arrow_go_back.svg";
import { ReactComponent as SettingsButton } from "../../assets/svgs/settings_cog.svg";
import * as SC from "./Header.style";
import { Link } from "react-router-dom";

function Header({ buttons }) {
  return (
    <SC.Header>
      <div>
        {buttons && (
          <Link to="/home">
            <BackButton />
          </Link>
        )}
        <Logo className="svgTitle" />
        {buttons && <SettingsButton />}
      </div>
    </SC.Header>
  );
}

export default Header;
