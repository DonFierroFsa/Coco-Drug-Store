import React, { useContext } from "react";
import { IconDelete, IconEdit } from "../../Icons";
import CustomButton from "../../Buttons/CustomButton";
import { useConfirm } from "../../../hooks/useConfirm";
import { OperationContext } from "../../../context/OperationsContext";

export default function Operation({ item, index }) {
  const { confirm, isConfirm, setIsConfirm, setConfirm } = useConfirm();
  const { removeProduct, clear, totalToPay } = useContext(OperationContext);

  const handleDelete = async () => {
    removeProduct(item);
    setIsConfirm("El producto fue eliminado");
    setConfirm(false);
  };
  return (
    <>
      {confirm && (
        <tr className="fixed inset-0 grid place-content-center backdrop-blur-xl">
          <td className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-2xl font-bold">
            {`¿Estas seguro de borrar el producto  - ${item.name} - ?`}
          </td>
          <td className="mt-4 flex w-full justify-evenly">
            <CustomButton text={"SI"} onClick={handleDelete} />
            <CustomButton text={"NO"} onClick={() => setConfirm(false)} />
          </td>
        </tr>
      )}
      {isConfirm && (
        <tr
          onClick={() => {
            setIsConfirm(null);
          }}
          className="fixed inset-0 grid place-content-center backdrop-blur-xl"
        >
          <td className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-4xl font-bold">
            {isConfirm}
          </td>
        </tr>
      )}
      {!isConfirm && (
        <tr className="table-row text-center odd:bg-customLightBlue">
          <td className="table-cell border border-white px-2">{index}</td>
          <td className="table-cell border border-white px-2">
            <IconDelete
              onClick={() => setConfirm(true)}
              className="mx-auto text-white hover:cursor-pointer hover:text-xl active:text-base active:text-richBlack"
            />
          </td>

          <td className="table-cell border border-white px-2">{item.name}</td>
          <td className="table-cell border border-white px-2">
            {item.quantity}
          </td>
          <td className="table-cell border border-white px-2">
            {item.category}
          </td>
          <td className="table-cell border border-white px-2">
            $ {item.price}
          </td>

          <td className="table-cell border border-white px-2">
            {item.isInOffer ? "SI" : "NO"}
          </td>
          <td className="table-cell overflow-hidden border border-white px-2">
            {item.description}
          </td>
          <td className="table-cell border border-white px-2">
            $ {item.price * item.quantity}
          </td>
        </tr>
      )}
    </>
  );
}
