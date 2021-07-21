import * as actionTypes from "../actionTypes/actionTypes";
import { initialValues } from "../initialValues/initialValues";

export default function getProducts(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAIL:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
}
