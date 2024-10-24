import React, { useContext } from "react";
import { dbContext } from "../../../context/dbContext";
import { useRestarCashRegister } from "../../../hooks/controllDbHooks/useRestarCashRegister";
import { useConfirm } from "../../../hooks/useConfirm";
import CustomButton from "../../Buttons/CustomButton";

export default function FormRestarCashRegister() {
  const { updateCashRegister } = useContext(dbContext);
  const { dbMsg, form, restarCashRegister } = useRestarCashRegister();
  const { confirm, isConfirm, setConfirm, setIsConfirm } = useConfirm();

  const handleRestarCashRegister = async (e) => {
    await restarCashRegister(e);
    updateCashRegister();
    form.current.reset();
  };

  return (
    <>
      <form
        className="mt-10 flex flex-col items-center justify-center"
        ref={form}
        onSubmit={handleRestarCashRegister}
      >
        <fieldset className="border-1 group mb-3 flex flex-col flex-wrap items-center justify-center gap-2 rounded border-2 border-white p-5 text-lightYellow duration-300 hover:border-lightYellow">
          <legend className="rounded border border-white bg-customLightBlue px-5 text-lg font-bold duration-200 group-hover:border-lightYellow group-hover:bg-richBlack">
            Re-establecer Caja
          </legend>
          <label
            className="duration-200 group-hover:font-bold"
            htmlFor="registerCashOwner"
          >
            Encargado de la caja
          </label>
          <input
            type="text"
            name="registerCashOwner"
            id="registerCashOwner"
            className="w-2/3 appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5 group-hover:border-lightRed"
            required
            maxLength={32}
            placeholder="MAIN"
            autoComplete="off"
          />
          <label
            className="duration-200 group-hover:font-bold"
            htmlFor="cashInRegister"
          >
            Efectivo en Caja
          </label>
          <input
            className="peer w-full appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center required:border-roseRed valid:border-green-400 valid:bg-green-800 group-hover:border-lightRed"
            type="number"
            name="cashInRegister"
            id="cashInRegister"
            required
            min={0}
          />
          <span className="mb-5">{dbMsg}</span>
          <CustomButton text={"RESTABLECER"} onClick={() => setConfirm(true)} />
        </fieldset>
      </form>
      <>
        {confirm && (
          <div
            onClick={() => setConfirm(false)}
            className="fixed inset-0 grid place-content-center backdrop-blur-xl"
          >
            <span className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-2xl font-bold">
              ¿Estas seguro que deseas Re-establecer la caja?
            </span>
            <div className="mt-4 flex w-full justify-evenly">
              <CustomButton
                text={"SI"}
                type={"submit"}
                onClick={() => {
                  handleRestarCashRegister;
                  setIsConfirm(dbMsg);
                  setConfirm(false);
                }}
              />
              <CustomButton
                text={"NO"}
                onClick={() => {
                  setConfirm(false);
                }}
              />
            </div>
          </div>
        )}
        {isConfirm && (
          <div
            onClick={() => {
              setIsConfirm(null);
            }}
            className="fixed inset-0 grid place-content-center backdrop-blur-xl"
          >
            <span className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-4xl font-bold">
              {isConfirm}
            </span>
          </div>
        )}
        <div className="hidden peer-valid:block">
          <CustomButton
            text={"RE-ESTABLECER"}
            type={"button"}
            onClick={() => setConfirm(true)}
          />
        </div>
      </>
    </>
  );
}
