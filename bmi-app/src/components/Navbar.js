import React from "react";
import { NavbarWrapper, NavbarItem, NavbarLink } from "../style";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarItem>
        <NavbarLink to="/">Anasayfa</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink to="/bmi">BMI nedir ? </NavbarLink>
      </NavbarItem>
    </NavbarWrapper>
  );
};

export default Navbar;
