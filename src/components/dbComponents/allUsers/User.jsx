import React, { useContext, useState } from "react";
import { IconArrowsExchangeAltV, IconDelete, IconEdit } from "../../Icons";
import { deleteUser } from "../../../Services/deleteUser";
import { useConfirm } from "../../../hooks/useConfirm";
import CustomButton from "../../Buttons/CustomButton";
import { upDownUser } from "../../../Services/upDownUser";
import { UserContext } from "../../../context/UserContext";

export default function User({ user, index }) {
  const { setStateForm, setUpdateUser } = useContext(UserContext);
  const { confirm, isConfirm, setIsConfirm, setConfirm, ask, setAsk } =
    useConfirm();

  const upDownAsk = `¿Estas seguro de cambiar el estado  del usuario  - ${user.name} - ?`;

  const handleDelete = async () => {
    const { data } = await deleteUser({ name: user.name });
    console.log(data);
    setIsConfirm(data.msg);
    setConfirm(false);
  };
  const handleUpDownUser = async () => {
    await upDownUser({ name: user.name });
    setConfirm(false);
  };
  const handleEdit = () => {
    setUpdateUser(true);
    setStateForm({
      _id: user._id,
      name: user.name,
      cellPhone: user.cellPhone,
      role: user.role,
    });
  };
  return (
    <>
      {confirm && (
        <tr className="fixed inset-0 grid place-content-center backdrop-blur-xl">
          <td className="rounded-md border border-darkYellow bg-roseRed px-10 py-5 text-2xl font-bold">
            {ask}
          </td>
          <td className="mt-4 flex w-full justify-evenly">
            <CustomButton
              text={"SI"}
              onClick={() => {
                ask == upDownAsk ? handleUpDownUser() : handleDelete();
              }}
            />

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

          <td className="table-cell border border-white px-2">{user._id}</td>
          <td className="table-cell border border-white px-2">{user.name}</td>
          <td className="table-cell border border-white px-2">
            {user.isActive ? "ACTIVO" : "DESHABILITADO"}
          </td>
          <td className="table-cell w-1 border border-white px-2">
            <IconArrowsExchangeAltV
              className="w-full text-xl text-white duration-100 hover:cursor-pointer hover:text-2xl active:text-base active:text-richBlack"
              onClick={() => {
                setAsk(upDownAsk);
                setConfirm(true);
              }}
            />
          </td>
          <td className="table-cell border border-white px-2">{user.role}</td>
          <td className="table-cell border border-white px-2">
            {user.cellPhone}
          </td>
          <td className="table-cell border border-white px-2">
            {new Date(user.createdAt).toJSON()?.slice(0, 10)}
          </td>
          <td className="table-cell border border-white px-2">
            {new Date(user.updatedAt).toJSON()?.slice(0, 10)}
          </td>
          <td className="table-cell border border-white px-2">
            <IconDelete
              onClick={() => {
                setAsk(
                  `¿Estas seguro de borrar el usuario  - ${user.name} - ?`,
                );

                setConfirm(true);
              }}
              className="mx-auto text-white hover:cursor-pointer hover:text-xl active:text-base active:text-richBlack"
            />
          </td>
          <td className="table-cell border border-white px-2">
            <IconEdit
              onClick={handleEdit}
              className="mx-auto text-white hover:cursor-pointer hover:text-xl active:text-base active:text-richBlack"
            />
          </td>
        </tr>
      )}
    </>
  );
}
