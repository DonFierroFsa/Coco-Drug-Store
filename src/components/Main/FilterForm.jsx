import React, { useState } from "react";
import { useFilter } from "../../hooks/useFilter";
import CustomButton from "../Buttons/CustomButton";

export default function FilterForm() {
  const { handleFilter } = useFilter();

  const [minPrice, setMinPrice] = useState(0);

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  return (
    <form
      action="#"
      className="mt-5 flex w-4/5 flex-col items-center rounded pt-2 duration-200 hover:brightness-125"
      onSubmit={handleFilter}
    >
      <fieldset className="border-1 border-lig flex min-h-48 w-2/3 flex-col items-center justify-around border border-dashed p-6 text-lightYellow duration-300 hover:border-customLightBlue lg:flex-row lg:items-start lg:p-2">
        <legend className="px-5 text-xl lg:ml-20">Filtra tu búsqueda</legend>
        <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
          <label
            htmlFor="minPrice"
            className="text-lg group-hover:font-semibold"
          >
            Precio
          </label>
          <input
            className="peer my-4 h-1.5 w-52 cursor-pointer appearance-none rounded-3xl bg-roseRed accent-lightRed"
            onChange={handleMinPrice}
            type="range"
            id="minPrice"
            min={0}
            max={300}
            step={5}
            defaultValue={0}
          />
          <span className="text-xl font-medium peer-active:scale-110 peer-active:font-bold">
            {minPrice}
          </span>
        </div>
        <div className="group flex h-28 flex-col items-center justify-between gap-1 duration-500 hover:brightness-125">
          <label
            htmlFor="category"
            className="text-lg group-hover:font-semibold"
          >
            Categorías
          </label>
          <select
            className="mb-6 cursor-pointer appearance-none overflow-scroll rounded bg-roseRed px-1 text-center font-semibold outline-none ring-2 ring-lightOrange"
            name="category"
            id="category"
          >
            <option value="all">TODOS</option>
            <option value="Clothes">Ropa</option>
            <option value="Electronic">Electronica</option>
            <option value="Furniture">Muebles</option>
            <option value="Shoes">Zapatos</option>
            <option value="Cosmetic">Cosméticos</option>
            <option value="other">Otros</option>
          </select>
        </div>
        <div className="group flex w-52 flex-col items-center justify-between gap-1 pb-8 duration-700 hover:brightness-125 lg:pb-0">
          <label
            htmlFor="isInOffer"
            className="text-lg group-hover:font-semibold"
          >
            Mostrar solo Ofertas
          </label>
          <label className="mt-3 cursor-pointer duration-700 hover:scale-125">
            <input
              type="checkbox"
              className="peer hidden"
              name="isInOffer"
              id="isInOffer"
            />
            <span className="relative inline-block h-8 w-8 rounded-full bg-roseRed duration-700 after:absolute after:right-3 after:top-1 after:h-5 after:w-2 after:rotate-45 after:content-stretch after:border-b-4 after:border-r-4 after:border-solid after:border-lightYellow after:opacity-0 after:duration-700 hover:shadow-imgShadow2 peer-checked:shadow-imgShadow peer-checked:after:opacity-100"></span>
          </label>
        </div>
      </fieldset>
      <div className="-mt-5 mb-10">
        <CustomButton type={"submit"} text={"MOSTRAR"} />
      </div>
    </form>
  );
}
