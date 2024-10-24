import { createContext, useState } from "react";
import { useContext } from "react";
import { dbContext } from "./dbContext";
import { useConfirm } from "../hooks/useConfirm";
import { callDb } from "../Services/dbAppi";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [stateForm, setStateForm] = useState({});
  const { dbState } = useContext(dbContext);
  const [updateUser, setUpdateUser] = useState(false);
  const { ask, confirm, isConfirm, setAsk, setConfirm, setIsConfirm } =
    useConfirm();

  const handleChange = (e) => {
    const propStateValue = e.target.value;

    setStateForm((prevState) => ({
      ...prevState,
      [e.target.name]: propStateValue,
    }));
  };

  const handleClear = () => {
    setStateForm({});
    setUpdateUser(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setConfirm(false);
    const token = JSON.parse(window.sessionStorage.getItem("loginData")).token;

    const isEdit = dbState.users.some((user) => user._id == stateForm._id);

    if (isEdit) {
      const body = { ...stateForm, token: token };
      const method = "PUT";
      const path = `users/updateUser,${stateForm.name}`;
      const { status, data } = await callDb({ body, method, path });
      if (status == 200) {
        console.log(data);
        setIsConfirm(`${data.msg}  ->${data.user.name}<-`);
        console.log(data.user);
        form.current.reset();
      } else {
        setIsConfirm(data.msg);
      }
    } else {
      //The passwords must be the same
      if (e.target.password.value != e.target.password2.value) {
        setIsConfirm("Las contraseñas no coinciden");

        return;
      }

      const formData = new FormData(e.target);

      for (const pair of formData.entries()) {
        //The password must no be changed
        if (
          pair[0] == "password" ||
          pair[0] == "password2" ||
          pair[0] == "role"
        ) {
          continue;
        }
        formData.set(pair[0], pair[1].toLocaleLowerCase().trim());
      }
      formData.delete("password2");
      formData.append("token", token);
      const body = Object.fromEntries(formData);
      const path = `users/newUser`;
      const method = "POST";
      const { data, status } = await callDb({ body, method, path });
      if (status == 201) {
        setIsConfirm(
          `El usuario - ${data.name.toUpperCase()} - fue creado exitosamente `,
        );
        form.current.reset();
      } else {
        setIsConfirm(data.msg);
        return;
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        allUsers: dbState.users,
        stateForm,
        handleClear,
        handleChange,
        handleSubmit,
        setStateForm,
        updateUser,
        setUpdateUser,
        ask,
        confirm,
        isConfirm,
        setAsk,
        setConfirm,
        setIsConfirm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
