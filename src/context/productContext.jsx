import { createContext, useEffect, useState } from "react";
import { callDb } from "../Services/dbAppi";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const path = "stock/table";
  const method = "GET";

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data, status } = await callDb({ path, method });
    if (status == 200) {
      const mappedProducts = data.tableProduct.map((product) => {
        return {
          id: product._id,
          title: product.name,
          price: product.price,
          isInOffer: product.isInOffer,
          images: product.images,
          description: product.description,
          category: product.category,
        };
      });
      setProducts(mappedProducts);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
