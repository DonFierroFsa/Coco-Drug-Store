import { useRef, useState } from "react";
import { callDb } from "../../Services/dbAppi";

export function useRestarCashRegister() {
  const form = useRef();
  const [dbMsg, setDbMsg] = useState("");

  const restarCashRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const loginData = JSON.parse(window.sessionStorage.getItem("loginData"));

    formData.append("token", loginData.token);

    const path = "cashRegister/restar";
    const method = "PUT";
    const body = Object.fromEntries(formData);

    const { data, status } = await callDb({ path, method, body });
    if (status == 200) {
      setDbMsg(data.msg);
    } else if (status == 404) {
      setDbMsg(data.msg || "Error ");
    } else {
      setDbMsg(data.msg);
    }
  };
  return { form, dbMsg, restarCashRegister };
}
