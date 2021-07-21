import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.main`
  max-width: 1200px;
  margin: auto;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  width: 250px;
  padding: 1rem;
`;

export const ProductCardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ProductCardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const ProductCardText = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const ProductCardButton = styled.button`
  padding: 0.5rem;
  font-size: 1.1rem;
  border: 2px solid #000;
  border-radius: 5px;
  color: #ffffff;
  background-color: #000;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const ProductFavoriteButton = styled.button`
  margin: 0.5rem 0;
  padding: 0.5rem;
  font-size: 1.1rem;
  border: 2px solid #000;
  border-radius: 5px;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const ProductCardPrice = styled.span``;

// Navbar

export const NavWrapper = styled.nav`
  background-color: #181818;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavListItem = styled.li`
  padding: 1rem;
  list-style-type: none;

  &:hover {
    background-color: #333;
  }
`;

export const NavListItemLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

export const ProductDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ProductDetailImgWrapper = styled.div`
  width: 50%;
  margin-right: 2rem;
`;

export const ProductDetailImg = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ProductDetailInfo = styled.div``;

export const ProductDetailName = styled.p``;

export const ProductDetailPrice = styled.p``;

export const ProductDetailCardButton = styled.button`
  padding: 0.5rem;
  font-size: 1.1rem;
  border: 2px solid #000;
  border-radius: 5px;
  color: #ffffff;
  background-color: #000;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const CartWrapper = styled.div`
  border-bottom: 2px solid #181818;
  margin: 2rem 0;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;

export const CartItemImageWrapper = styled.div``;

export const CartItemImage = styled.img`
  width: 250px;
`;

export const CartItemQuantity = styled.p``;

export const CartItemName = styled.p``;

export const CartItemPrice = styled.p``;
