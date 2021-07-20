import React from "react";
import { useSelector } from "react-redux";
import {
  NavList,
  NavListItem,
  NavListItemLink,
  NavWrapper,
} from "./styled-components";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <NavWrapper>
      <NavList>
        <NavListItem>
          <NavListItemLink exact to="/">
            Home
          </NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink to="/favorites">Favorites</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink to="/cart">Cart- {cart.length}</NavListItemLink>
        </NavListItem>
      </NavList>
    </NavWrapper>
  );
};

export default Navbar;
