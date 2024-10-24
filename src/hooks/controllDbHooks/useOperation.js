import { useContext, useRef, useState } from "react";
import { callDb } from "../../Services/dbAppi";
import { OperationContext } from "../../context/OperationsContext";

export function useOperation() {
  const seller = JSON.parse(
    window.sessionStorage.getItem("loginData"),
  ).userName;
  const token = JSON.parse(window.sessionStorage.getItem("loginData")).token;
  const { operationState, clear } = useContext(OperationContext);
  const [dbMsg, setDbMsg] = useState();

  const form = useRef();

  const handleSell = async () => {
    const body = {
      operationState,
      token,
      seller,
    };

    const path = "cashRegister/sell";
    const method = "PUT";
    const { data, status } = await callDb({ path, method, body });
    if (status == 200) {
      console.log(body.operationState);
      setDbMsg(data.msg);
      window.localStorage.removeItem("operationState");
      clear();
    } else {
      setDbMsg(data.msg);
    }
  };
  return { handleSell, dbMsg, form, seller };
}
