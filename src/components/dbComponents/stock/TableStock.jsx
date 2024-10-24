import React, { useContext } from "react";
import ItemsInStock from "./ItemsInStock";
import { dbContext } from "../../../context/dbContext";
import { IconUpdate } from "../../Icons";

export default function TableStock() {
  // const { stock, refreshStock } = useStock();
  const { dbState, updateStock } = useContext(dbContext);
  const stock = dbState.stock;
  return (
    <>
      <h3 className="text-4xl">STOCK</h3>
      <button
        className="group my-5 flex flex-col items-center justify-center gap-1 duration-150 hover:scale-110 active:scale-100"
        onClick={() => updateStock()}
      >
        Actualizar
        <IconUpdate className="group-hover:animate-spin" />
      </button>

      {Array.isArray(stock) ? (
        <table className="table w-11/12 border-separate overflow-scroll">
          <thead className="table-header-group w-full rounded-full">
            <tr className="table-row">
              <th className="border border-white px-2">Indice</th>
              <th className="border border-white px-2">Eliminar</th>
              <th className="border border-white px-2">Editar</th>
              <th className="border border-white px-2">Nombre</th>
              <th className="border border-white px-2">Cantidad</th>
              <th className="border border-white px-2">Categoría</th>
              <th className="border border-white px-2">Precio</th>
              <th className="border border-white px-2">Costo</th>
              <th className="border border-white px-2">Ganancia</th>
              <th className="border border-white px-2">En Oferta</th>
              <th className="border border-white px-2">Vencimiento</th>
              <th className="border border-white px-2">Actualizado</th>
            </tr>
          </thead>
          {stock && (
            <tbody className="table-row-group border-spacing-y-1 bg-customBlue">
              {stock.map((item, index) => (
                <ItemsInStock item={item} index={index} key={item.id} />
              ))}
            </tbody>
          )}
        </table>
      ) : (
        <h3 className="animate-pulse rounded-md border-2 border-lightOrange bg-customLightBlue p-2 text-3xl font-bold">
          {stock.msg}
        </h3>
      )}
    </>
  );
}
