import React, { useContext } from "react";
import { IconDelete, IconEdit } from "../../Icons";
import { dbContext } from "../../../context/dbContext";
import CustomButton from "../../Buttons/CustomButton";
import { deleteItem } from "../../../Services/deleteItem";
import { useConfirm } from "../../../hooks/useConfirm";

export default function ItemsInStock({ item, index }) {
  const { editDataForm } = useContext(dbContext);
  const { confirm, isConfirm, setIsConfirm, setConfirm } = useConfirm();
  const handleDelete = async () => {
    const msg = await deleteItem(item.name);
    setIsConfirm(msg);
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
          <td className="table-cell border border-white px-2">
            <IconEdit
              onClick={() => {
                editDataForm(item);
              }}
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
          <td className="table-cell border border-white px-2">{item.price}</td>
          <td className="table-cell border border-white px-2">{item.cost}</td>
          <td className="table-cell border border-white px-2">
            {item.price - item.cost}
          </td>
          <td className="table-cell border border-white px-2">
            {item.isInOffer ? "SI" : "NO"}
          </td>
          <td className="table-cell border border-white px-2">
            {new Date(item.expiresIn).toJSON()?.slice(0, 10)}
          </td>
          <td className="table-cell border border-white px-2">NEVER</td>
        </tr>
      )}
    </>
  );
}
