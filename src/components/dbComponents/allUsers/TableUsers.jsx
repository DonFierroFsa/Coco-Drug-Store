import React, { useContext } from "react";
import User from "./User";
import { dbContext } from "../../../context/dbContext";

export default function TableUsers() {
  const { dbState } = useContext(dbContext);
  return (
    <>
      {dbState.users.length > 0 ? (
        <table className="table w-11/12 border-separate overflow-scroll">
          <thead className="table-header-group w-full rounded-full">
            <tr>
              <th className="border border-white px-2">Num</th>
              <th className="border border-white px-2">ID</th>
              <th className="border border-white px-2">Nombre</th>
              <th className="border border-white px-2">Estado</th>
              <th className="border border-white px-2">Activar/Desactivar</th>
              <th className="border border-white px-2">Rol</th>
              <th className="border border-white px-2">Numero de Teléfono</th>
              <th className="border border-white px-2">Creado</th>
              <th className="border border-white px-2">Actualizado</th>
              <th className="border border-white px-2">Eliminar</th>
              <th className="border border-white px-2">Actualizar</th>
            </tr>
          </thead>
          <tbody className="table-row-group border-spacing-y-1 bg-customBlue">
            {dbState.users.map((user, index) => (
              <User user={user} index={index} key={user._id} />
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="rounded-md border-4 border-double border-white p-2 text-4xl">
          {dbState.users}
        </h3>
      )}
    </>
  );
}
