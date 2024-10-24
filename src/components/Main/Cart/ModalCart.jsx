import React from "react";
import CartItem from "./CartItem";
import CustomButton from "../../Buttons/CustomButton";
import { useCart } from "../../../hooks/useCart";

export default function ModalCart() {
  const { cart, clearCart, totalCart } = useCart();
  return (
    <aside className="scrollbar fixed right-10 top-60 h-2/3 w-2/5 overflow-x-hidden rounded-lg bg-customBlue px-2 py-1 text-center">
      <h2 className="text-xl">Tus Compras</h2>
      <table className="grid px-2">
        <thead>
          <tr className="my-4 grid w-full grid-cols-4">
            <th className="col-span-2">NOMBRE</th>
            <th className="grid grid-rows-2">
              <h3>PRECIO</h3>
              <div className="grid grid-cols-2">
                <span>Uni.</span>
                <span>Total</span>
              </div>
            </th>
            <th>CANTIDAD</th>
          </tr>
        </thead>
        <tbody className="my-3">
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </tbody>
        <tfoot className="pb-4">
          <tr className="my-2 grid grid-cols-2 rounded bg-roseRed text-xl font-bold">
            <th>TOTAL</th>
            <th>$ {totalCart}</th>
          </tr>
          <tr className="mt-5 grid w-full grid-cols-2">
            <td>
              <CustomButton text={"COMPRAR"} />
            </td>
            <td>
              <div onClick={() => clearCart()}>
                <CustomButton text={"LIMPIAR"} />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </aside>
  );
}
