import React, { useContext, useRef, useState } from "react";
import CustomButton from "../../Buttons/CustomButton";
import { dbContext } from "../../../context/dbContext";
import { useLoadProduct } from "../../../hooks/controllDbHooks/useLoadProduct";

export default function FormStock() {
  const { dbState, updateDataFrom, clearFormData } = useContext(dbContext);
  const { dbMsg, loadProduct, form } = useLoadProduct();

  const handleChange = ({ target }) => {
    updateDataFrom(target);
  };
  const handleClear = () => {
    clearFormData();
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={loadProduct}
        className="group mx-10 mt-5 flex w-full flex-col items-center rounded pt-2 duration-200 hover:brightness-125"
      >
        <fieldset className="border-1 group flex min-h-48 w-3/4 flex-col flex-wrap items-center justify-around gap-10 rounded border-2 border-white p-5 text-lightYellow duration-300 hover:border-lightYellow lg:flex-row lg:items-start">
          <legend className="rounded border border-white bg-customLightBlue px-5 text-lg font-bold duration-200 group-hover:border-lightYellow group-hover:bg-richBlack lg:ml-20">
            Carga de Productos
          </legend>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="name">Nombre</label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
              type="text"
              required
              name="name"
              id="name"
              autoComplete="false"
              onChange={handleChange}
              value={dbState.formData.name ?? ""}
            />
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="cost">Costo</label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
              type="number"
              name="cost"
              id="cost"
              required
              onChange={handleChange}
              value={dbState.formData.cost ?? ""}
            />
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="price">Precio</label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
              type="number"
              name="price"
              id="price"
              required
              onChange={handleChange}
              value={dbState.formData.price ?? ""}
            />
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="quantity">Cantidad</label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
              type="number"
              name="quantity"
              id="quantity"
              required
              onChange={handleChange}
              value={dbState.formData.quantity ?? ""}
            />
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
              id="description"
              onChange={handleChange}
              value={dbState.formData.description ?? ""}
              maxLength={24}
              placeholder="Marca // Tamaño"
            ></textarea>
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="expiresIn">Fecha de Vencimiento</label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
              type="date"
              name="expiresIn"
              id="expiresIn"
              onChange={handleChange}
              value={
                new Date(dbState.formData.expiresIn).toJSON()?.slice(0, 10) ??
                ""
              }
            />
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="category">Categoría</label>
            <select
              className="mb-6 cursor-pointer appearance-none overflow-scroll rounded bg-roseRed px-1 text-center font-semibold outline-none ring-2 ring-lightOrange"
              required
              name="category"
              id="category"
            >
              <option value="other">Otro</option>
              <option value="Clothes">Ropa</option>
              <option value="Electronic">Electronica</option>
              <option value="Furniture">Muebles</option>
              <option value="Shoes">Zapatos</option>
              <option value="Cosmetic">Cosméticos</option>
            </select>
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="image1">Imagen-1</label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
              type="url"
              name="image1"
              id="image1"
              onChange={handleChange}
              value={dbState.formData.image1 ?? ""}
            />
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="image2">Image-2</label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
              type="url"
              name="image2"
              id="image2"
              onChange={handleChange}
              value={dbState.formData.image2 ?? ""}
            />
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500 hover:brightness-125">
            <label htmlFor="image3">Imagen-3</label>
            <input
              className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
              type="url"
              name="image3"
              id="image3"
              onChange={handleChange}
              value={dbState.formData.image3 ?? ""}
            />
          </div>
          <div className="group flex h-28 flex-col items-center justify-start gap-1 duration-500">
            <label htmlFor="isInOffer" className="text-lg">
              Ofertas
            </label>
            <label className="mt-3 cursor-pointer duration-700 hover:scale-125">
              <input
                type="checkbox"
                className="peer hidden"
                name="isInOffer"
                id="isInOffer"
                onChange={handleChange}
                checked={dbState.formData.isInOffer ?? ""}
                value={dbState.formData.isInOffer ?? ""}
              />
              <span className="relative inline-block h-8 w-8 rounded-full bg-roseRed duration-700 after:absolute after:right-3 after:top-1 after:h-5 after:w-2 after:rotate-45 after:content-stretch after:border-b-4 after:border-r-4 after:border-solid after:border-lightYellow after:opacity-0 after:duration-700 peer-checked:after:opacity-100"></span>
            </label>
          </div>
        </fieldset>
        <div className="-mt-3 mb-10 flex gap-10">
          <CustomButton text={"CARGAR"} type={"submit"} />
          <CustomButton
            text={"LIMPIAR"}
            type={"button"}
            onClick={handleClear}
          />
        </div>
      </form>
      {dbMsg && (
        <aside className="mb-16 grid place-content-center text-center backdrop-blur-sm">
          <h2 className="rounded-md border border-darkYellow bg-roseRed bg-opacity-15 px-2 py-3 text-2xl font-bold">
            {dbMsg.msg}
          </h2>
          <span>{dbMsg.error}</span>
        </aside>
      )}
    </>
  );
}
