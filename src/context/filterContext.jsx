import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const initialFilter = {
    minPrice: 0,
    isInOffer: false,
    category: "all",
    id: 0,
  };
  const [filter, setFilter] = useState(initialFilter);

  return (
    <FilterContext.Provider value={{ initialFilter, filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
