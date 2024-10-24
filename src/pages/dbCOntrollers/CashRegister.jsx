import React, { useContext, useEffect, useRef, useState } from "react";
import { dbContext } from "../../context/dbContext";
import { IconArrowDownUp, IconUpdate } from "../../components/Icons";
import FormRestarCashRegister from "../../components/dbComponents/cashRegister/FormRestarCashRegister";
import FormCashOut from "../../components/dbComponents/cashRegister/FormCashOut";
import Details from "../../components/dbComponents/cashRegister/Details";

export default function CashRegister() {
  const { dbState } = useContext(dbContext);
  const cashRegisters = dbState?.cashRegisters || null;
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  const [table, setTable] = useState();
  const indexTable = useRef();

  const handleTables = (table) => {
    indexTable.current = table;
    setTable(cashRegisters[table]);
  };
  const handleRefresh = () => {
    setTable(cashRegisters[indexTable.current]);
  };

  const handleSort = () => {
    setTable((prevState) => {
      return { ...prevState, operations: prevState.operations.reverse() };
    });
  };

  return (
    <section className="flex w-full flex-col items-center">
      <h2 className="my-10 text-4xl font-bold">Cajas Registradoras</h2>
      {!cashRegisters && <h3 className="my-10">Cargando ...</h3>}
      <nav className="my-5 w-full">
        <aside className="flex w-full items-center justify-around">
          {table?.seller == "MAIN" && <FormCashOut maxCash={table.cash} />}
          <FormRestarCashRegister />
        </aside>
        <ul className="mt-5 flex w-full justify-evenly gap-16 rounded-xl bg-richBlack px-4 py-2">
          {cashRegisters &&
            cashRegisters.map((item, index) => {
              return (
                <li
                  key={item._id}
                  className="cursor-pointer rounded-xl bg-customLightBlue px-2 py-1 font-semibold hover:bg-roseRed hover:text-richBlack"
                  onClick={() => {
                    handleTables(index);
                  }}
                >
                  {item.seller.toUpperCase()}
                </li>
              );
            })}
        </ul>
        <button
          className="group mx-auto my-4 flex flex-col items-center justify-center gap-1 duration-150 hover:scale-110 active:scale-100"
          onClick={() => handleRefresh()}
        >
          Actualizar
          <IconUpdate className="text-4xl group-hover:animate-spin" />
        </button>
      </nav>
      {table && (
        <table className="table w-11/12 border-separate overflow-scroll">
          <thead className="table-header-group w-full rounded-full">
            <tr className={`${!isModal && "group"} table-row text-xl`}>
              <th className="table-cell border border-lightOrange bg-customLightBlue">
                {table.seller.toUpperCase()}
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th className="table-cell border-2 border-r-0 border-white bg-customLightBlue duration-100 group-hover:scale-110">
                Efectivo en Caja
              </th>
              <th className="table-cell border-2 border-l-0 border-white bg-customLightBlue font-extrabold duration-100 group-hover:scale-110">
                $ {table.cash}
              </th>
            </tr>
            <tr className="table-row text-lg">
              <th className="flex items-center justify-center gap-5 border border-white">
                Fecha
                <span
                  onClick={handleSort}
                  className="m-1 cursor-pointer rounded-xl border border-lightYellow p-1 hover:scale-110 active:scale-105"
                >
                  <IconArrowDownUp />
                </span>
              </th>
              <th className="border border-white px-2">Operación</th>
              <th className="border border-white px-2">Vendedor</th>
              <th className="border border-white px-2">
                Numero de Operaciones
              </th>
              <th className="border border-white px-2">Detalle</th>
              <th className="border border-white px-2">Total</th>
            </tr>
          </thead>
          <tbody className="table-row-group border-spacing-y-1 bg-customBlue">
            {table.operations.map((op) => {
              return (
                <tr
                  key={op._id}
                  className={`${!isModal && "group hover:bg-lightRed hover:text-white"} table-row text-center odd:bg-customLightBlue`}
                >
                  <td className="table-cell border border-white px-2 group-hover:scale-125 group-hover:border-none">
                    {new Date(op.date).toLocaleString()}
                  </td>
                  <td className="table-cell border border-white px-2 group-hover:scale-125 group-hover:border-none">
                    {op.operation}
                  </td>
                  <td className="table-cell border border-white px-2 group-hover:scale-125 group-hover:border-none">
                    {op.seller}
                  </td>
                  <td className="table-cell border border-white px-2 group-hover:scale-125 group-hover:border-none">
                    {op.details.length}
                  </td>
                  <td className="table-cell border border-white px-2 group-hover:scale-125 group-hover:border-none">
                    <div onClick={handleModal}>
                      <Details op={op} />
                    </div>
                  </td>
                  <td className="table-cell border border-white px-2 group-hover:scale-125 group-hover:border-none">
                    $ {op.totalCashOperated}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="right-0 table-footer-group">
            <tr className={`${!isModal && "group"} table-row`}>
              <th className="table-cell"></th>
              <th className="table-cell"></th>
              <th className="table-cell"></th>
              <th className="table-cell"></th>
              <th className="table-cell border-2 border-r-0 border-white bg-customLightBlue duration-100 group-hover:scale-125">
                Efectivo en Caja
              </th>
              <th className="table-cell border-2 border-l-0 border-white bg-customLightBlue duration-100 group-hover:scale-125">
                $ {table.cash}
              </th>
            </tr>
          </tfoot>
        </table>
      )}
    </section>
  );
}
