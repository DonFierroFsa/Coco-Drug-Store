import React, { useContext, useEffect, useRef, useState } from "react";
import CustomButton from "../../components/Buttons/CustomButton";
import { useOperation } from "../../hooks/controllDbHooks/useOperation";
import { dbContext } from "../../context/dbContext";
import TableProducts from "../../components/dbComponents/operations/TableProducts";
import { OperationContext } from "../../context/OperationsContext";
import { useSearch } from "../../hooks/controllDbHooks/useSearch";
import { useConfirm } from "../../hooks/useConfirm";

export default function Operations() {
  const { dbMsg, handleSell, seller } = useOperation();
  const { dbState } = useContext(dbContext);
  const { addProduct } = useContext(OperationContext);
  const { handleChange, search, productsFound } = useSearch();
  const { confirm, isConfirm, setConfirm, setIsConfirm } = useConfirm();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = dbState.stock.find(
      (item) => item.name == e.target.productName.value,
    );
    const quantity = Number(e.target.quantity.value);
    addProduct({ product, quantity });
  };

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h2 className="my-10 text-4xl font-bold">Venta</h2>

      <form
        ref={form}
        className="group flex w-11/12 flex-col items-center justify-center gap-2 rounded border border-white bg-customBlue px-2 pb-6 pt-4 text-xl duration-200 hover:brightness-125 md:w-1/4"
        onSubmit={handleSubmit}
      >
        <h3 className="-mt-8 mb-5 rounded border border-white bg-customLightBlue px-5 text-xl font-bold duration-200 group-hover:border-lightYellow group-hover:bg-richBlack">
          {seller.toUpperCase()}
        </h3>
        <label htmlFor="productName" className="font-bold">
          Producto
        </label>
        <input
          type="text"
          name="productName"
          id="productName"
          required
          autoComplete="off"
          className="appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_#6A040F] required:border-roseRed valid:border-green-400 valid:bg-green-800 autofill:valid:shadow-[inset_0_0_0px_1000px_#166534] invalid:mb-5"
          list="suggestions"
          value={search}
          onChange={handleChange}
        />
        <datalist id="suggestions" className="text-4xl">
          {productsFound.map((product) => {
            return (
              <option
                value={product.name}
                key={product.id}
                className="text-red-600"
              >
                {`Precio ${product.price} -- Cantidad ${product.quantity} --
                ${
                  product.description.length > 1
                    ? product.description.toUpperCase()
                    : " NONE"
                }`}
              </option>
            );
          })}
        </datalist>
        <label htmlFor="quantity">Cantidad</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          required
          className="mb-5 w-1/3 appearance-none rounded border-2 bg-customLightBlue px-2 py-1 text-center required:border-roseRed valid:border-green-400 valid:bg-green-800"
        />
        <CustomButton text={"Cargar"} type="submit" />
      </form>

      <TableProducts />
      {confirm && (
        <div
          onClick={() => setConfirm(false)}
          className="fixed inset-0 grid place-content-center backdrop-blur-xl"
        >
          <span className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-2xl font-bold">
            ¿Desea confirmar la venta?
          </span>
          <div className="mt-4 flex w-full justify-evenly">
            <CustomButton
              text={"SI"}
              type={"submit"}
              onClick={() => {
                handleSell();
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
      <CustomButton text={"VENDER"} onClick={() => setConfirm(true)} />
    </section>
  );
}
