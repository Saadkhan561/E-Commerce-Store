import React, { createContext, useReducer } from 'react';
import { CartReducer } from './cartReducer';

export const CartContext = createContext();

const Storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initialState = { cartItem: Storage };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({ type: 'ADD', payload });
    return state.cartItem;
  };

  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE', payload });
    return state.cartItem;
  };

  const increaseQuantity = (payload) => {
    dispatch({ type: 'INCQTY', payload });
    return state.cartItem;
  };

  const decreaseQuantity = (payload) => {
    dispatch({ type: 'DECQTY', payload });
    return state.cartItem;
  };

  const clearBasket = () => {
    dispatch({ type: 'CLEAR', payload: undefined });
    // debugger;
    // console.log('removed');
    return state.cartItem;
  };

  const getItems = () => {
    return state.cartItem;
  };

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getItems,
    ...state,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
