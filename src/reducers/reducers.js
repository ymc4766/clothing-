import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directoryReducer";
import shopReducer from "./shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  auth: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({
//   auth: userReducer,
//   cart: cartReducer,
// });
