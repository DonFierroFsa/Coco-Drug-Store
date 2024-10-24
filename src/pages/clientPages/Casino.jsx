import React from "react";
import { useCasinoData } from "../../hooks/controllDbHooks/useCasinoData";

export default function Casino() {
  const { casinoData } = useCasinoData();
  return (
    <section className="fade-in group my-4 flex min-h-screen w-11/12 flex-col items-center justify-between bg-cassinoBG bg-cover font-serif md:justify-around">
      <h2 className="w-fit rounded bg-richBlack bg-opacity-50 px-3 py-2 text-center text-6xl font-bold backdrop-blur-sm md:mt-20">
        {casinoData.nameCasino.toUpperCase()}
      </h2>
      <p className="a flex flex-col gap-2 rounded-md bg-richBlack bg-opacity-50 px-2 py-1 text-4xl backdrop-blur-sm md:text-5xl">
        <span className="animate-bounce font-semibold text-lightOrange md:animate-custom-ping">
          {casinoData.bonus}% BONUS
        </span>
        CON TU CARGA
      </p>
      <p className="flex flex-col items-center justify-center rounded-md bg-richBlack bg-opacity-60 px-2 py-1 text-5xl text-darkYellow backdrop-blur-sm">
        LIMITE DE CARGA PARA EL BONUS
        <span className="my-2 animate-pulse font-extrabold">
          ${casinoData.cashLoadLimit}
        </span>
      </p>
      <div className="group grid w-full place-content-center">
        <p className="w-full rounded-md bg-richBlack bg-opacity-50 px-2 py-1 text-center text-2xl backdrop-blur-sm md:text-3xl">
          Crea tu cuenta escribiendo al
        </p>
        <a
          href="https://wa.me/543704094513/?text=Hola%20estoy%20interesado%20en%20pedir%20picadas"
          target="_blank"
          className="mx-auto"
        >
          <span className="rounded-md bg-richBlack bg-opacity-80 px-2 py-2 text-center text-3xl backdrop-blur-sm duration-300 group-hover:font-bold group-hover:text-green-400 md:text-3xl">
            WhatsApp
          </span>
        </a>
      </div>
    </section>
  );
}
