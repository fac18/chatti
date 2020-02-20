import React from 'react'
import { ReactComponent as Logo } from "../../assets/svgs/logo_small.svg";
import { Link } from "react-router-dom";
import * as SC from "./headerRegistration.style";

const HeaderRegistration = () => {
    return (
        <SC.HeaderRegistration>
            <Link to='/home'>
             <Logo  />
            </Link>
            
            </SC.HeaderRegistration>
    )
}

export default HeaderRegistration 
