import { useRef, useState } from "react";
import { callDb } from "../../Services/dbAppi";

export function useCashOut() {
  const form = useRef();
  const initialMsg = "Solo administradores";
  const [dbMsg, setDbMsg] = useState(initialMsg);

  const cashOut = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const loginData = JSON.parse(window.sessionStorage.getItem("loginData"));

    formData.append("seller", loginData.userName);
    formData.append("token", loginData.token);

    const path = "cashRegister/cashOut";
    const method = "PUT";
    const body = Object.fromEntries(formData);
    const { data, status } = await callDb({ path, method, body });
    if (status == 200) {
      setDbMsg(data.msg);
      form.current.reset();

      setTimeout(() => {
        setDbMsg(initialMsg);
      }, 3500);
    } else if (status == 404) {
      setDbMsg(data.msg || "Error ");
      console.log(data.error);

      setTimeout(() => {
        setDbMsg(initialMsg);
      }, 3500);
    } else {
      setDbMsg(data.msg);
      setTimeout(() => {
        setDbMsg(initialMsg);
      }, 3500);
    }
  };
  return { form, dbMsg, cashOut, initialMsg };
}
