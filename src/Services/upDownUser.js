import { callDb } from "./dbAppi";

export const upDownUser = async ({ name }) => {
  const method = "DELETE";
  const path = `users/downUser,${name}`;
  const body = {
    token: JSON.parse(window.sessionStorage.getItem("loginData")).token,
  };
  const { data } = await callDb({ body, method, path });
  return data.msg;
};
