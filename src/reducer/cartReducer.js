import { cartInitialState, updateCartState } from "../context/initialState";
import { CART_ACTIONS } from "../reducer/cartActions";

export function cartReducer(state = cartInitialState, { type, payload }) {
  const { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM, SELECT_QUANTITY } =
    CART_ACTIONS;

  switch (type) {
    case ADD_TO_CART: {
      const productIndex = state.findIndex((item) => item.id === payload.id);
      if (productIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productIndex].quantity += 1;
        updateCartState(newCart);
        return newCart;
      } else {
        const newCart = [
          ...state,
          {
            ...payload,
            quantity: 1,
          },
        ];
        updateCartState(newCart);
        return newCart;
      }
    }
    case REMOVE_ITEM: {
      const productIndex = state.findIndex((item) => item.id == payload.id);

      if (productIndex >= 0) {
        const newCart = structuredClone(state);
        if (newCart[productIndex].quantity > 1) {
          newCart[productIndex].quantity -= 1;
          updateCartState(newCart);
          return newCart;
        } else {
          const filteredCart = newCart.filter((item) => item.id != payload.id);
          updateCartState(filteredCart);
          return filteredCart;
        }
      }
    }
    case SELECT_QUANTITY:
      {
        const productIndex = state.findIndex(
          (item) => item.id == payload.product.id,
        );
        if (productIndex >= 0) {
          const newCart = structuredClone(state);
          newCart[productIndex].quantity = Number(payload.quantity);
          updateCartState(newCart);
          return newCart;
        }
      }
      return state;

    case CLEAR_CART: {
      updateCartState([]);
      return [];
    }
    default:
      return state;
  }
}
