import React from "react";
import { IconDetailsMore } from "../../Icons";
import { useModal } from "../../../hooks/useModal";

export default function Details({ op }) {
  const { handleModal, isVisible } = useModal();

  return (
    <>
      <IconDetailsMore
        onClick={handleModal}
        className="mx-auto cursor-pointer duration-100 hover:scale-150 hover:text-yellow-50"
      />

      {isVisible && (
        <div
          onClick={handleModal}
          className="fixed inset-0 z-30 bg-customBlue/[0.8]"
        >
          <table className="fixed left-1/4 top-1/4 table h-min w-1/2 border-separate">
            <thead className="full table-header-group rounded-full">
              <tr className="table-row">
                <th className="table-cell border border-lightOrange bg-customLightBlue">
                  Fecha
                </th>
                <th className="table-cell border border-lightOrange bg-customLightBlue">
                  {new Date(op.date).toLocaleString()}
                </th>
                <th className="table-cell border border-lightOrange bg-customLightBlue">
                  ID
                </th>
                <th className="table-cell border border-lightOrange bg-customLightBlue">
                  {op._id}
                </th>
              </tr>
              <tr className="table-row">
                <th className="table-cell border border-lightOrange bg-customLightBlue"></th>
                <th className="table-cell border border-lightOrange bg-customLightBlue">
                  Producto Operado
                </th>
                <th className="table-cell border border-lightOrange bg-customLightBlue">
                  Cantidad
                </th>
                <th className="table-cell border border-lightOrange bg-customLightBlue">
                  Sub-Total
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group border-spacing-y-1 bg-customBlue">
              {op.details.map((operation, index) => {
                return (
                  <tr
                    key={operation.productOperated}
                    className="group table-row bg-customLightBlue text-center hover:bg-lightRed hover:text-white"
                  >
                    <td className="table-cell border border-lightOrange bg-customLightBlue">
                      {index + 1}
                    </td>
                    <td className="table-cell border border-lightOrange px-2 group-hover:scale-125 group-hover:border-none">
                      {operation.productOperated}
                    </td>
                    <td className="table-cell border border-lightOrange px-2 group-hover:scale-125 group-hover:border-none">
                      {operation.quantityOperated}
                    </td>
                    <td className="table-cell border border-lightOrange px-2 group-hover:scale-125 group-hover:border-none">
                      $ {operation.cashOperated}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="table-footer-group">
              <tr className="group table-row">
                <th className="table-cell border-2 border-r-0 bg-customLightBlue text-xl group-hover:scale-110">
                  Vendedor
                </th>
                <th className="table-cell border-2 border-r-0 bg-customLightBlue text-xl group-hover:scale-110">
                  {op.seller.toUpperCase()}
                </th>
                <th className="table-cell border-2 border-r-0 bg-customLightBlue text-xl group-hover:scale-110">
                  TOTAL
                </th>
                <th className="table-cell border-2 border-l-0 bg-customLightBlue text-xl group-hover:scale-110">
                  $ {op.totalCashOperated}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </>
  );
}
