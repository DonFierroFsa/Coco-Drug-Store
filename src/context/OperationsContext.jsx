import { createContext, useReducer } from "react";
import { operationInitialState } from "./initialState";
import { OPERATION_ACTIONS } from "../reducer/operationActions";
import { operationReducer } from "../reducer/operationReducer";

export const OperationContext = createContext();

export function OperationProvider({ children }) {
  const { ADD_PRODUCT, CLEAR, REMOVE_PRODUCT } = OPERATION_ACTIONS;
  const [state, dispatch] = useReducer(operationReducer, operationInitialState);
  const totalToPay = state.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  const addProduct = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };
  const removeProduct = (product) => {
    dispatch({ type: REMOVE_PRODUCT, payload: product });
  };
  const clear = () => {
    dispatch({
      type: CLEAR,
    });
  };
  return (
    <OperationContext.Provider
      value={{
        operationState: state,
        addProduct,
        removeProduct,
        clear,
        totalToPay,
      }}
    >
      {children}
    </OperationContext.Provider>
  );
}
