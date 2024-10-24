import React, { useContext } from "react";
import CustomButton from "../../Buttons/CustomButton";
import { UserContext } from "../../../context/UserContext";

export default function UserForm() {
  const {
    handleSubmit,
    handleChange,
    handleClear,
    stateForm,
    updateUser,
    ask,
    confirm,
    isConfirm,
    setAsk,
    setConfirm,
    setIsConfirm,
  } = useContext(UserContext);

  const createAsk = `¿Estas seguro que deseas modificar al usuario ->${stateForm.name}<-?`;

  return (
    <>
      {isConfirm && (
        <aside
          onClick={() => {
            setIsConfirm(null);
          }}
          className="fixed inset-0 grid place-content-center backdrop-blur-xl"
        >
          <p className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-4xl font-bold">
            {isConfirm}
          </p>
        </aside>
      )}
      <form
        className="mt-10 flex flex-col items-center justify-evenly"
        onSubmit={handleSubmit}
      >
        <fieldset className="group mb-3 flex items-center justify-center gap-10 rounded border-2 border-white p-5 pb-10 hover:border-lightYellow">
          <legend className="rounded border border-white bg-customLightBlue px-5 text-lg font-bold duration-200 group-hover:border-lightYellow group-hover:bg-richBlack">
            {updateUser ? "Actualizar Usuario" : "Crear Usuario"}
          </legend>
          <div className="group flex flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label
              className="duration-200 group-hover:font-bold"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534]"
              type="text"
              required
              name="name"
              id="name"
              autoComplete="off"
              onChange={handleChange}
              value={stateForm.name ?? ""}
            />
          </div>
          {!updateUser && (
            <div className="group flex flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
              <label
                htmlFor="password"
                className="duration-200 group-hover:font-bold"
              >
                Contraseña
              </label>
              <input
                className="peer appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534]"
                type="password"
                name="password"
                id="password"
                required
                minLength={8}
                value={stateForm.password ?? ""}
                onChange={handleChange}
              />
              <label
                htmlFor="password2"
                className="hidden duration-200 group-hover:font-bold peer-valid:block"
              >
                Repetir Contraseña
              </label>
              <input
                className="hidden appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] peer-valid:block"
                type="password"
                name="password2"
                id="password2"
                required
                minLength={8}
                value={stateForm.password2 ?? ""}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="group flex flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label
              htmlFor="role"
              className="duration-200 group-hover:font-bold"
            >
              Num. de Celular
            </label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534]"
              type="number"
              name="cellPhone"
              id="cellPhone"
              required
              value={stateForm.cellPhone ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="group flex flex-col items-center justify-start gap-3 duration-500 hover:brightness-125">
            <label htmlFor="role" className="text-lg group-hover:font-semibold">
              Rol
            </label>
            <select
              className="cursor-pointer appearance-none overflow-scroll rounded bg-roseRed px-1 text-center font-semibold outline-none ring-2 ring-lightOrange"
              name="role"
              id="role"
              value={stateForm.role}
              onChange={handleChange}
            >
              <option value="Seller">Seller</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </fieldset>
        <div className="-my-7 flex gap-10">
          <CustomButton
            text={updateUser ? "Actualizar" : "Crear"}
            type="button"
            onClick={() => {
              setAsk(createAsk);
              setConfirm(true);
            }}
          />
          <CustomButton
            text={"LIMPIAR / CREAR"}
            type="button"
            onClick={handleClear}
          />
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
        </div>
      </form>
    </>
  );
}
