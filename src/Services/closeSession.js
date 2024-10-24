import { callDb } from "./dbAppi";

export const closeSession = async ({ userName }) => {
  const path = "auth/logout/";
  const method = "POST";
  const body = { name: userName };
  const { data, status } = await callDb({ path, method, body });

  return { data, status };
};
