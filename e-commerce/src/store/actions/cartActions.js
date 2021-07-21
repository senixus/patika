import * as actionTypes from "../actionTypes/actionTypes";

export const addToCartAction = (product) => ({
  type: actionTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCartAction = (product) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: product,
});
