import { useEffect, useState } from "react";
import { callDb } from "../../Services/dbAppi";

export function useGetUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [msg, setMsg] = useState("");

  const getUser = async () => {
    const path = "users/allUsers";
    const method = "POST";
    const body = {
      token: JSON.parse(window.sessionStorage.getItem("loginData")).token,
    };
    const { status, data } = await callDb({ body, method, path });
    if (status == 200) {
      setAllUsers(data);
    } else {
      setMsg(data.msg);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { allUsers, msg };
}
