import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"               
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about"             
                >
                    About
                </NavLink>
                <NavLink 
                  to="/cart" 
                >
                    Cart
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;