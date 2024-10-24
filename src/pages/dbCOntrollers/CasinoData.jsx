import React, { useRef, useState } from "react";
import { useConfirm } from "../../hooks/useConfirm";
import CustomButton from "../../components/Buttons/CustomButton";
import { useCasinoData } from "../../hooks/controllDbHooks/useCasinoData";

export default function CasinoData() {
  const {
    casinoData,
    handleSubmit,
    form,
    confirm,
    isConfirm,
    setConfirm,
    setIsConfirm,
  } = useCasinoData();

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h2 className="my-10 text-4xl font-bold">Actualizar Datos del Casino</h2>

      <form
        ref={form}
        className={`${!confirm && "group hover:brightness-125"} flex w-11/12 flex-col items-center justify-center gap-2 rounded border border-white bg-customBlue px-2 pb-6 pt-4 text-xl duration-200 md:w-1/4`}
        onSubmit={handleSubmit}
      >
        <h3 className="-mt-8 mb-5 rounded border border-white bg-customLightBlue px-5 text-xl font-bold duration-200 group-hover:border-lightYellow group-hover:bg-richBlack">
          Casino DataBase
        </h3>
        <label htmlFor="nameCasino" className="font-bold">
          Nombre Del Casino
        </label>
        <input
          type="text"
          name="nameCasino"
          id="nameCasino"
          required
          autoComplete="off"
          className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
        />

        <label htmlFor="Bonus">Bonus</label>
        <input
          type="number"
          name="Bonus"
          id="Bonus"
          required
          className="mb-5 w-1/3 appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center required:border-roseRed valid:border-green-400 valid:bg-green-800"
        />
        <label htmlFor="cashLoadLimit">Limite de carga de efectivo</label>
        <input
          type="number"
          name="cashLoadLimit"
          id="cashLoadLimit"
          required
          className="mb-5 w-1/3 appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center required:border-roseRed valid:border-green-400 valid:bg-green-800"
        />
        <CustomButton
          text={"Actualizar"}
          type="button"
          onClick={() => setConfirm(true)}
        />
        {confirm && (
          <div className="fixed inset-0 grid place-content-center backdrop-blur-xl">
            <span className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-2xl font-bold">
              ¿Desea confirmar la actualización?
            </span>
            <div className="mt-4 flex w-full justify-evenly">
              <CustomButton text={"SI"} type="submit" />
              <CustomButton
                text={"NO"}
                onClick={() => {
                  setConfirm(false);
                }}
              />
            </div>
          </div>
        )}
      </form>

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
      <aside className="my-10 flex w-11/12 flex-col items-center justify-center gap-2 rounded border border-white bg-customBlue px-2 pb-6 pt-4 text-xl duration-200 md:w-1/4">
        <h3 className="text-2xl font-semibold">Casio Data</h3>
        <ul className="flex flex-col items-start justify-center">
          <li>
            Nombre del Casino :
            <span className="font-extrabold">
              {casinoData.nameCasino.toUpperCase()}
            </span>
          </li>
          <li>
            Bonus : <span className="font-extrabold">{casinoData.bonus}</span>
          </li>
          <li>
            Limite de Carga :
            <span className="font-extrabold"> {casinoData.cashLoadLimit}</span>
          </li>
        </ul>
      </aside>
    </section>
  );
}
