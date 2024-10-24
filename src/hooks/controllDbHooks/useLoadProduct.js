import { useContext, useRef, useState } from "react";
import { callDb } from "../../Services/dbAppi";
import { dbContext } from "../../context/dbContext";

export function useLoadProduct() {
  const { dbState, clearFormData } = useContext(dbContext);
  const form = useRef();
  const [dbMsg, setDbMsg] = useState(null);

  const loadProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    for (const pair of formData.entries()) {
      formData.set(pair[0], pair[1].toLowerCase().trim());
    }

    const token = JSON.parse(window.sessionStorage.getItem("loginData")).token;
    formData.append("token", token);

    const body = Object.fromEntries(formData);
    console.log(body);
    const isEdit = dbState.stock.some((item) => item.name == body.name);

    if (isEdit) {
      const path = `stock/updateProduct,${body.name}`;
      const method = "PUT";

      const { data, status } = await callDb({ body, method, path });
      if (status == 200) {
        setDbMsg({
          msg: `El producto - ${body.name.toUpperCase()} - fue actualizado exitosamente `,
        });

        form.current.reset();
        setTimeout(() => {
          setDbMsg(null);
        }, 2500);
      } else {
        setDbMsg(data);
      }
    } else {
      const path = "stock/newProduct";
      const method = "POST";
      const { data, status } = await callDb({ body, method, path });
      if (status == 201) {
        setDbMsg({
          msg: `El producto - ${data.name.toUpperCase()} - fue cargado exitosamente `,
        });

        form.current.reset();
        setTimeout(() => {
          setDbMsg(null);
        }, 2500);
      } else {
        setDbMsg(data);
      }
    }
    clearFormData();
  };
  return { loadProduct, dbMsg, form };
}
