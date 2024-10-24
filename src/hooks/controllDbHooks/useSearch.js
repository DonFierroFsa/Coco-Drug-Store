import { useContext, useEffect, useState } from "react";
import { dbContext } from "../../context/dbContext";

export const useSearch = () => {
  const { dbState } = useContext(dbContext);
  const [productsFound, setProductsFound] = useState([]);

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);

    //debounce
  };
  useEffect(() => {
    const productsArray = dbState.stock.filter((item) => {
      return item.name.startsWith(search) && item.quantity > 0;
    });
    setProductsFound(productsArray);
  }, [search]);

  return { search, handleChange, productsFound };
};
