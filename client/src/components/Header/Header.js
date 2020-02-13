import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo_small.svg";
import * as SC from "./Header.style";

function Header() {
  //need to know if to show buttons or not?

  return (
    <SC.Header>
      <header>
        {/* SOMETIMES: back button */}
        <Logo />
        {/* SOMETIMES: settings button */}
      </header>
    </SC.Header>
  );
}

export default Header;
