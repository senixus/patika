import * as actionTypes from "../actionTypes/actionTypes";

export const addToFavoriteAction = (product) => ({
  type: actionTypes.ADD_TO_FAVORITES,
  payload: product,
});

export const removeFromFavoriteAction = (product) => ({
  type: actionTypes.REMOVE_FROM_FAVORITES,
  payload: product,
});
