import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { callDb } from "../../Services/dbAppi";

export function useLogin() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState();
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    const path = "auth/login";
    const method = "POST";
    const body = formData;

    const { data, status } = await callDb({ path, method, body });

    if (status === 200) {
      window.sessionStorage.setItem(
        "loginData",
        JSON.stringify({
          userName: data.user.name,
          role: data.user.role,
          logged: true,
          token: data.token,
        }),
      );
      navigate("/dbControllers");
      form.current.reset();
    } else {
      setErrorMsg(data.msg);
      form.current.reset();
    }
  };
  return { handleSubmit, errorMsg, form };
}
