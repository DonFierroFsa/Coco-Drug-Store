import { callDb } from "./dbAppi";

export const deleteUser = async ({ name }) => {
  const method = "DELETE";
  const path = `users/deleteUser,${name}`;
  const body = {
    token: JSON.parse(window.sessionStorage.getItem("loginData")).token,
  };
  const { data, status } = await callDb({ body, method, path });
  console.log(data);
  return { data, status };
};
