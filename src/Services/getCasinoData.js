import { callDb } from "./dbAppi";

export const getCasinoData = async () => {
  const path = "casino/casinoData";
  const method = "GET";

  const { data, status } = await callDb({ method, path });

  return { data, status };
};
