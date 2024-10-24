import { createContext, useEffect, useReducer } from "react";
import { Db_ACTIONS } from "../reducer/dbActions";
import { DbReducer } from "../reducer/dbReducer";
import { getStock } from "../Services/getStock";
import { getCashRegisters } from "../Services/getCashRegisters";
import { getUsers } from "../Services/getUsers";

export const dbContext = createContext();

export function DbProvider({ children }) {
  const {
    UPDATE_CASH_REGISTER,
    UPDATE_STOCK,
    UPDATE_USERS,
    UPDATE_DATAFORM,
    EDIT_DATAFORM,
    CLEAR_DATAFORM,
  } = Db_ACTIONS;

  const [dbState, dispatch] = useReducer(DbReducer, {
    stock: [],
    users: [],
    cashRegisters: [],
    formData: {},
  });

  const updateCashRegister = async () => {
    const data = await getCashRegisters();
    dispatch({
      type: UPDATE_CASH_REGISTER,
      payload: data,
    });
  };
  //Products actions
  const updateStock = async () => {
    const data = await getStock();
    dispatch({
      type: UPDATE_STOCK,
      payload: data,
    });
  };

  //User actions
  const updateUsers = async () => {
    const data = await getUsers();
    dispatch({
      type: UPDATE_USERS,
      payload: data,
    });
  };

  //Form Actions
  const updateDataFrom = (target) => {
    dispatch({
      type: UPDATE_DATAFORM,
      payload: target,
    });
  };

  const editDataForm = (item) => {
    dispatch({
      type: EDIT_DATAFORM,
      payload: item,
    });
  };

  const clearFormData = () => {
    dispatch({
      type: CLEAR_DATAFORM,
    });
  };

  useEffect(() => {
    updateCashRegister();
    updateStock();
    updateUsers();
  }, []);

  return (
    <dbContext.Provider
      value={{
        dbState,
        updateStock,
        updateCashRegister,
        updateUsers,
        updateDataFrom,
        editDataForm,
        clearFormData,
      }}
    >
      {children}
    </dbContext.Provider>
  );
}
