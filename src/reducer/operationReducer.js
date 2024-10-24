import { updateOperationState } from "../context/initialState";
import { OPERATION_ACTIONS } from "./operationActions";

export function operationReducer(state, { type, payload }) {
  const { ADD_PRODUCT, CLEAR, REMOVE_PRODUCT } = OPERATION_ACTIONS;

  switch (type) {
    case ADD_PRODUCT: {
      const quantity = Number(payload.quantity);
      const productIndex = state.findIndex(
        (product) => product.id == payload.product.id,
      );
      if (productIndex >= 0) {
        const newOperation = structuredClone(state);
        newOperation[productIndex].quantity += quantity;
        updateOperationState(newOperation);
        return newOperation;
      } else {
        const newOperation = [
          ...state,
          { ...payload.product, quantity: payload.quantity },
        ];
        updateOperationState(newOperation);
        return newOperation;
      }
    }
    case REMOVE_PRODUCT: {
      const newOperation = structuredClone(state);

      const filteredOperation = newOperation.filter(
        (item) => item.id != payload.id,
      );
      updateOperationState(filteredOperation);
      return filteredOperation;
    }
    case CLEAR: {
      updateOperationState([]);
      return [];
    }
    default:
      return state;
  }
}
