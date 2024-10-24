import React, { useState } from "react";
import { IconCartEmpty, IconCartFull } from "../../Icons";
import { useCart } from "../../../hooks/useCart";
import ModalCart from "./ModalCart";

export default function Cart() {
  const { cart, newProduct } = useCart();

  const [isVisible, setIsVisible] = useState(false);
  function handleModal() {
    setIsVisible(!isVisible);
  }
  const isEmpty = cart.length > 0;

  return (
    <>
      <div
        onClick={handleModal}
        className={`group fixed right-0 top-4 z-20 grid h-24 w-24 scale-75 place-content-center rounded-full bg-roseRed duration-200 hover:bg-customLightBlue hover:bg-opacity-70 md:top-40 lg:right-28 ${newProduct && "animate-jello"} md:scale-100`}
      >
        <span className="absolute -top-6 right-7 z-30 cursor-pointer rounded-full bg-lightYellow px-2 text-2xl font-bold text-roseRed opacity-80 duration-500 group-hover:top-5 group-hover:bg-roseRed group-hover:text-lightYellow group-hover:opacity-100">
          {cart.length}
        </span>
        {isEmpty ? (
          <IconCartFull
            className={`cursor-pointer text-6xl text-darkYellow duration-300 group-hover:scale-150 group-hover:text-lightYellow`}
          />
        ) : (
          <IconCartEmpty className="cursor-pointer text-6xl text-darkYellow duration-300 group-hover:scale-150 group-hover:text-lightYellow" />
        )}
      </div>
      {isVisible && (
        <div className="bg-transparent">
          <div
            onClick={handleModal}
            className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75"
          ></div>
          <ModalCart />
        </div>
      )}
    </>
  );
}
