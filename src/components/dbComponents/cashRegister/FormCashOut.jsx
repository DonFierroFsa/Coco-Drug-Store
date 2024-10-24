import React, { useContext } from "react";
import { useCashOut } from "../../../hooks/controllDbHooks/useCashOut";

import CustomButton from "../../Buttons/CustomButton";
import { dbContext } from "../../../context/dbContext";

export default function FormCashOut({ maxCash }) {
  const { updateCashRegister } = useContext(dbContext);
  const { dbMsg, initialMsg, form, cashOut } = useCashOut();
  const handleCashOut = async (e) => {
    await cashOut(e);
    updateCashRegister();
  };

  return (
    <form
      className="mt-10 flex flex-col items-center justify-center"
      onSubmit={handleCashOut}
      ref={form}
    >
      <fieldset className="border-1 group mb-3 flex flex-col flex-wrap items-center justify-center gap-2 rounded border-2 border-white p-5 text-lightYellow duration-300 hover:border-lightYellow">
        <legend className="rounded border border-white bg-customLightBlue px-5 text-lg font-bold duration-200 group-hover:border-lightYellow group-hover:bg-richBlack">
          Retirar Efectivo
        </legend>
        <label className="duration-200 group-hover:font-bold" htmlFor="cashOut">
          Cantidad a retirar
        </label>
        <input
          className="w-full appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center required:border-roseRed valid:border-green-400 valid:bg-green-800 group-hover:border-lightRed peer-invalid:hidden"
          type="number"
          name="cashOut"
          id="cashOut"
          required
          placeholder={`Max: ${maxCash}`}
          min={1}
          max={maxCash}
        />
        <span
          className={
            dbMsg == initialMsg
              ? `mb-5 font-bold`
              : `my-3 animate-pulse rounded-md border-2 border-lightOrange bg-customLightBlue p-2 font-bold`
          }
        >
          {dbMsg}
        </span>
        <CustomButton text={"RETIRAR"} type={"submit"} />
      </fieldset>
    </form>
  );
}
