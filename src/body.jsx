import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FilterProvider } from "./context/filterContext.jsx";
import { CartProvider } from "./context/cartContextR.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/productContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductProvider>
  </BrowserRouter>,
);
