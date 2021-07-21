import * as actionTypes from "../actionTypes/actionTypes";
import { initialValues } from "../initialValues/initialValues";

export default function favoriteReducer(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
