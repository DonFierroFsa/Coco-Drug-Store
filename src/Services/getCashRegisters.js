import { callDb } from "./dbAppi";

export const getCashRegisters = async () => {
  const path = "cashRegister/allCashRegister";
  const method = "POST";
  const body = {
    token: JSON.parse(window.sessionStorage.getItem("loginData")).token,
  };

  const { data, status } = await callDb({ path, body, method });
  if (status == 200) {
    return data;
  } else {
    return "Error al conectar a la Base de Datos";
  }
};
