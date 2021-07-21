import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CartWrapper,
  CartItem,
  CartItemImage,
  CartItemImageWrapper,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
} from "./styled-components";
import { removeFromCartAction } from "../store/actions/cartActions";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const removeCart = (cartItem) => dispatch(removeFromCartAction(cartItem));

  useEffect(() => {
    setPrice(
      cart.reduce(
        (acc, cartItem) => acc + cartItem.quantity * cartItem.product.price,
        0
      )
    );
  }, [price]);

  return (
    <React.Fragment>
      <CartWrapper>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.product.id}>
            <CartItemImageWrapper>
              <CartItemImage src={cartItem.product.imageURL} />
            </CartItemImageWrapper>

            <CartItemName>{cartItem.product.name}</CartItemName>
            <CartItemQuantity>{cartItem.quantity}</CartItemQuantity>
            <CartItemPrice>$ {cartItem.product.price}</CartItemPrice>
            <CartItemPrice
              onClick={() => removeCart(cartItem)}
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            >
              &times;
            </CartItemPrice>
          </CartItem>
        ))}
      </CartWrapper>
      <CartItemPrice>$ {price}</CartItemPrice>
    </React.Fragment>
  );
};

export default Cart;
