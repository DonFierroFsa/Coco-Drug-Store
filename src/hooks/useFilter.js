import { useContext } from "react";
import { FilterContext } from "../context/filterContext";

export function useFilter() {
  const { filter, setFilter } = useContext(FilterContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.isInOffer === false ||
          filter.isInOffer === product.isInOffer) &&
        (filter.category === "all" || filter.category === product.category) &&
        (filter.id === 0 || filter.id === product.id)
      );
    });
  };

  const handleFilter = (event) => {
    event.preventDefault();
    const newFilter = {
      minPrice: event.target.minPrice.value,
      isInOffer: event.target.isInOffer.checked,
      category: event.target.category.value,
      id: 0,
      sort: false,
    };
    setFilter(newFilter);
  };

  return { filterProducts, handleFilter, filter, setFilter };
}
