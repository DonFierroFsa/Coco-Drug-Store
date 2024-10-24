import React, { useRef } from "react";
import CustomButton from "../../Buttons/CustomButton";
import { useConfirm } from "../../../hooks/useConfirm";
import { callDb } from "../../../Services/dbAppi";

export default function ResetPasswordForm() {
  const { ask, confirm, isConfirm, setAsk, setConfirm, setIsConfirm } =
    useConfirm();

  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirm(false);
    const formData = new FormData(e.target);
    const token = JSON.parse(window.sessionStorage.getItem("loginData")).token;
    formData.append("token", token);
    const body = Object.fromEntries(formData);
    const method = "PUT";
    const path = "users/updatePassword";

    const { data, status } = await callDb({ body, method, path });

    if (status == 200) {
      setIsConfirm(data.msg);
      form.current.reset();
    } else {
      setIsConfirm(data.msg);
      console.log(data.error);
    }
  };
  const handleClear = () => {
    form.current.reset();
  };
  return (
    <>
      {isConfirm && (
        <tr
          onClick={() => {
            setIsConfirm(null);
          }}
          className="fixed inset-0 grid place-content-center backdrop-blur-xl"
        >
          <td className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-4xl font-bold">
            {isConfirm}
          </td>
        </tr>
      )}
      <form
        ref={form}
        className="mt-10 flex-col items-center justify-evenly"
        onSubmit={handleSubmit}
      >
        <fieldset className="group mb-3 flex flex-col items-center justify-center gap-2 rounded border-2 border-white p-5 hover:border-lightYellow">
          <legend className="rounded border border-white bg-customLightBlue px-5 text-lg font-bold duration-200 group-hover:border-lightYellow group-hover:bg-richBlack">
            Restablecer Contraseña
          </legend>
          <div className="group flex flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label
              className="duration-200 group-hover:font-bold"
              htmlFor="name2"
            >
              Nombre de Usuario
            </label>
            <input
              className="peer appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534]"
              type="text"
              name="name"
              id="name2"
              minLength={3}
              required
            />

            <label
              className="mt-5 duration-200 group-hover:font-bold peer-invalid:hidden"
              htmlFor="oldPassword"
            >
              Contraseña
            </label>
            <input
              className="peer appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] peer-invalid:hidden"
              type="password"
              name="oldPassword"
              id="oldPassword"
              minLength={8}
              required
            />

            <label
              className="mt-5 duration-200 group-hover:font-bold peer-invalid:hidden"
              htmlFor="newPassword"
            >
              Nueva Contraseña
            </label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] peer-invalid:hidden"
              type="password"
              name="newPassword"
              id="newPassword"
              required
            />
          </div>

          <div className="mt-5 flex w-72 justify-around">
            <CustomButton
              text={"ENVIAR"}
              type="button"
              onClick={() => {
                setConfirm(true);
                setAsk(
                  `¿Deseas cambiar la contraseña de ->${form.current.name.value}<-?`,
                );
              }}
            />
            <CustomButton
              text={"LIMPIAR"}
              type="button"
              onClick={handleClear}
            />
          </div>
          {confirm && (
            <div className="fixed inset-0 grid place-content-center backdrop-blur-xl">
              <p className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-2xl font-bold">
                {ask}
              </p>
              <div className="mt-4 flex w-full justify-evenly">
                <CustomButton text={"SI"} type="submit" />
                <CustomButton text={"NO"} onClick={() => setConfirm(false)} />
              </div>
            </div>
          )}
        </fieldset>
      </form>
    </>
  );
}
