import { callDb } from "./dbAppi";

export const getUsers = async () => {
  const path = "users/allUsers";
  const method = "POST";
  const body = {
    token: JSON.parse(window.sessionStorage.getItem("loginData")).token,
  };
  const { status, data } = await callDb({ body, method, path });
  if (status == 200) {
    return data;
  } else {
    return data.msg;
  }
};
