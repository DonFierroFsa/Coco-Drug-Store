import { useFilter } from "../../hooks/useFilter";
import { useContext } from "react";
import CardProduct from "../../components/Main/Products/CardProduct";
import { useInfinityScroll } from "../../hooks/useInfinityScroll";
import { IconArrowDownCircleFill } from "../../components/Icons";
import OffersCarrusel from "../../components/Main/OffersCarrusel.jsx/OffersCarrusel";
import FilterForm from "../../components/Main/FilterForm";
import Cart from "../../components/Main/Cart/Cart";
import { ProductContext } from "../../context/productContext";

export default function Products() {
  const { filterProducts, filter } = useFilter();
  const { products } = useContext(ProductContext);

  const filteredProducts = filterProducts(products);

  const { isEnd, lazyItems, visor } = useInfinityScroll({
    itemsToLoad: filteredProducts,
    reload: (filter, products),
  });

  return (
    <>
      <OffersCarrusel />
      <FilterForm />
      <ul className="flex min-h-96 w-5/6 flex-wrap items-center justify-center gap-10 rounded-md bg-customBlue px-6 pb-28 pt-8 text-xl text-lightYellow">
        {lazyItems.map((product) => {
          return <CardProduct product={product} key={product.id} />;
        })}
        <div ref={visor} className="grid w-full place-content-center">
          {!isEnd && (
            <IconArrowDownCircleFill className="text-amethyst animate-bounce text-4xl" />
          )}
          {isEnd && <p>END OF PRODUCTS</p>}
        </div>
        <Cart />
      </ul>
    </>
  );
}
