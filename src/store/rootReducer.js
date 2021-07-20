import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
