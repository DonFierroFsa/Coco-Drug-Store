import React from "react";
import { IconDashCircle, IconPlusCircle } from "../../Icons";
import { useCart } from "../../../hooks/useCart";

export default function CartItem({ item }) {
  const { addToCart, removeItem, selectQuantity } = useCart();
  return (
    <tr className="group my-2 grid grid-cols-4 place-items-center rounded hover:bg-customLightBlue">
      <th className="col-span-2 grid grid-cols-2 place-items-center">
        <img
          className="w-16 rounded-md"
          src={item.images[0]}
          alt={item.title}
        />
        <h3 className="group-hover:brightness-150">{item.title}</h3>
      </th>
      <td className="grid w-full grid-cols-2 group-hover:brightness-150">
        <span> $ {item.price}</span>
        <span className="font-semibold">$ {item.price * item.quantity}</span>
      </td>
      <td className="grid w-full grid-cols-3 place-content-evenly place-items-center text-xl group-hover:brightness-150">
        <button
          onClick={() => removeItem(item)}
          className="rounded-full active:scale-90 active:brightness-75"
        >
          <IconDashCircle className="rounded-full bg-lightOrange text-2xl text-lightYellow" />
        </button>
        <input
          name="quantity"
          className="w-10 rounded-md bg-customLightBlue py-1 text-center hover:py-1 focus:rounded-md"
          type="number"
          value={item.quantity}
          onChange={(event) => selectQuantity({ product: item, event })}
        />
        <button
          onClick={() => {
            addToCart(item);
          }}
          className="rounded-full active:scale-90 active:brightness-75"
        >
          <IconPlusCircle className="rounded-full bg-lightOrange text-2xl text-lightYellow" />
        </button>
      </td>
    </tr>
  );
}
