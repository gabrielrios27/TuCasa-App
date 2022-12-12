import { cartTypes } from '../types';

const { ADD_TO_CART, REMOVE_FROM_CART } = cartTypes;

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});
