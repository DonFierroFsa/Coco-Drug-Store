import { createContext, useReducer, useState } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { cartInitialState } from "./initialState";
import { CART_ACTIONS } from "../reducer/cartActions";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM, SELECT_QUANTITY } =
    CART_ACTIONS;

  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [newProduct, setNewProduct] = useState(false);

  const totalCart = state.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
    setNewProduct(true);

    setTimeout(() => {
      setNewProduct(false);
    }, 1500);
  };

  const removeItem = (product) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: product,
    });
  };
  const selectQuantity = ({ product, event }) => {
    const quantity = Number(event.target.value);
    dispatch({
      type: SELECT_QUANTITY,
      payload: { quantity, product },
    });
  };
  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  const buy = () => {};

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeItem,
        selectQuantity,
        clearCart,
        totalCart,
        newProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
