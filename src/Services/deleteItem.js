import { callDb } from "./dbAppi";

export const deleteItem = async (name) => {
  const path = `stock/deleteProduct,${name}`;
  const method = "DELETE";
  const body = {
    token: JSON.parse(window.sessionStorage.getItem("loginData")).token,
  };
  const { data } = await callDb({ body, method, path });
  return data.msg;
};
