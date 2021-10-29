import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  REMOVE_ITEM,
  SIGN_IN,
  TOGGLE_CART_MENU,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_MENU,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const deleteItemFromCart = (item) => {
  return {
    type: DELETE_ITEM_FROM_CART,
    payload: item,
  };
};
