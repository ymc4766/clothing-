// import _ from "lodash";
import { addItemToCart, removeItemFromCart } from "../actions/cart-utils";
import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART_MENU,
} from "../actions/types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_MENU:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
