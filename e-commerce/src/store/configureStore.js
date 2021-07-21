import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
