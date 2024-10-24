import { callDb } from "./dbAppi";

export const getStock = async () => {
  const path = "stock/tableStock";
  const method = "POST";
  const body = {
    token: JSON.parse(window.sessionStorage.getItem("loginData")).token,
  };
  const { data, status } = await callDb({ method, body, path });
  if (status == 200) {
    const tableStock = data.tableStock.map((item) => ({
      id: item._id,
      name: item.name,
      quantity: item.quantity,
      category: item.category,
      price: item.price,
      description: item.description,
      image1: item.images[0],
      image2: item.images[1],
      image3: item.images[2],
      cost: item.cost,
      isInOffer: item.isInOffer,
      expiresIn: item.expiresIn,
    }));
    return tableStock;
  } else {
    return data;
  }
};
