import { useContext, useEffect } from "react";
import { OperationContext } from "../../../context/OperationsContext";
import ItemsToSell from "./ItemsToSell";

export default function TableStock() {
  const { operationState, totalToPay } = useContext(OperationContext);
  useEffect(() => {}, [operationState]);

  return (
    <section className="mx-auto my-10 w-full">
      <table className="mx-auto table w-11/12 border-separate overflow-scroll">
        <thead className="table-header-group w-full rounded-full">
          <tr className="table-row">
            <th className="border border-white px-2">Indice</th>
            <th className="border border-white px-2">Eliminar</th>
            <th className="border border-white px-2">Nombre</th>
            <th className="border border-white px-2">Cantidad</th>
            <th className="border border-white px-2">Categoría</th>
            <th className="border border-white px-2">Precio</th>
            <th className="border border-white px-2">En Oferta</th>
            <th className="border border-white px-2">Descripción</th>
            <th className="border border-white px-2">Total por Products</th>
          </tr>
        </thead>
        {operationState.length > 0 && (
          <tbody className="table-row-group border-spacing-y-1 bg-customBlue">
            {operationState.map((item, index) => (
              <ItemsToSell item={item} index={index} key={item.id} />
            ))}
          </tbody>
        )}
        <tfoot className="table-footer-group">
          <tr className="table-row">
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th className="border border-white px-2 text-xl font-extrabold">
              TOTAL
            </th>
            <th className="border border-white px-2 text-xl font-extrabold">
              $ {totalToPay}
            </th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
