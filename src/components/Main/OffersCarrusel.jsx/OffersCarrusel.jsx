import React, { useContext } from "react";
import { useFilter } from "../../../hooks/useFilter";
import { ProductContext } from "../../../context/productContext";

export default function OffersCarrusel() {
  const { products } = useContext(ProductContext);

  const { filter, setFilter } = useFilter();

  const offersProducts = products.filter(
    (product) => product.isInOffer == true,
  );

  const handleClick = (id) => {
    const newFilter = {
      ...filter,
      id: id,
    };
    setFilter(newFilter);
  };

  return (
    <section
      id="offersProducts"
      className="my-2 flex w-full flex-col items-center justify-center"
    >
      <h2 className="*:first-letter: mt-8 animate-pulse rounded-3xl p-2 font-serif text-6xl shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#F48C06,0_0_30px_#9D0208]">
        OFERTAS
      </h2>
      <aside className="group mb-24 inline-flex w-4/5 overflow-hidden rounded-full py-28 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="group-hover:paused flex animate-loop-scroll items-center justify-center">
          {offersProducts.map((product) => {
            return (
              <a href={`#${product.title}`} key={product.id}>
                <li className="mx-16 w-64">
                  <img
                    onClick={() => {
                      handleClick(product.id);
                    }}
                    className="cursor-pointer rounded-full duration-300 hover:scale-125 hover:shadow-imgShadow active:scale-110 active:brightness-75"
                    src={product.images[0]}
                    alt={product.title}
                  />
                </li>
              </a>
            );
          })}
        </ul>
        <ul className="group-hover:paused flex animate-loop-scroll items-center justify-center">
          {offersProducts.map((product) => {
            return (
              <a href={`#${product.title}`} key={product.id + 2}>
                <li className="mx-16 w-64">
                  <img
                    onClick={() => {
                      handleClick(product.id);
                    }}
                    className="cursor-pointer rounded-full duration-300 hover:scale-125 hover:shadow-imgShadow active:scale-110 active:brightness-75"
                    src={product.images[0]}
                    alt={product.title}
                  />
                </li>
              </a>
            );
          })}
        </ul>
      </aside>
    </section>
  );
}
