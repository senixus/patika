import * as actionTypes from "../actionTypes/actionTypes";
import { initialValues } from "../initialValues/initialValues";

export default function cartReducer(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const product = state.cart.find((cartItem) => {
        return cartItem.product.id === action.payload.id;
      });

      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      }

      return {
        ...state,
        cart: [...state.cart, { quantity: 1, product: action.payload }],
      };

    case actionTypes.REMOVE_FROM_CART:
      const removeProduct = state.cart.filter(
        (cartItem) => cartItem.product.id !== action.payload.product.id
      );

      return {
        ...state,
        cart: removeProduct,
      };

    default:
      return state;
  }
}
