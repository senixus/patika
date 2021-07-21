import axios from "../../api/axios";
import * as actionTypes from "../actionTypes/actionTypes";

export const getProductsAction = () => {
  return async (dispatch) => {
    const response = await axios.get("/products");

    dispatch({ type: actionTypes.GET_PRODUCTS, payload: response.data });
  };
};

export const getProductDetailAction = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/products/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL, payload: response.data });
  };
};
