import { useState } from "react";
import { closeSession } from "../../Services/closeSession";
import { useNavigate } from "react-router-dom";

export function useSession() {
  const userName = JSON.parse(
    window.sessionStorage.getItem("loginData"),
  ).userName;
  const [sessionMsg, setSessionMsg] = useState();
  const navigate = useNavigate();

  const handleCloseSession = async () => {
    const { data, status } = await closeSession({ userName });
    if (status == 200) {
      setSessionMsg(data.msg);
      setTimeout(() => {
        window.sessionStorage.clear();
        navigate("/");
      }, 2000);
    } else {
      setSessionMsg(data.msg);
    }
  };

  return { userName, sessionMsg, handleCloseSession };
}
