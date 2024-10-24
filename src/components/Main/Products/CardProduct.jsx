import { useCart } from "../../../hooks/useCart";
import { IconCartMinus, IconCartPlus } from "../../Icons";
import ImgCardProduct from "./ImgCardProduct";

export default function CardProduct({ product }) {
  const { cart, addToCart, removeItem } = useCart();

  const checkIsInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const isInCart = checkIsInCart(product);

  return (
    <li
      key={product.id}
      id={product.title}
      className="fade-in group flex w-72 scroll-mt-96 flex-col items-center justify-center rounded-md border-2 border-roseRed bg-customLightBlue text-center hover:brightness-125"
    >
      <h3 className="h-20 px-2 pt-2 group-hover:font-medium">
        {product.title}
      </h3>
      <ImgCardProduct product={product} />
      <figcaption className="flex w-full flex-col items-center gap-4 bg-roseRed pb-2 pt-6">
        <span className="rounded px-2 text-center font-bold group-hover:bg-customLightBlue">
          $ {product.price}
        </span>
        {isInCart ? (
          <button onClick={() => removeItem(product)}>
            <IconCartMinus className="cursor-pointer text-5xl duration-100 group-hover:drop-shadow-icon-shadow" />
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>
            <IconCartPlus className="cursor-pointer text-5xl group-hover:animate-bounce-delay group-hover:drop-shadow-icon-shadow" />
          </button>
        )}
      </figcaption>
    </li>
  );
}
