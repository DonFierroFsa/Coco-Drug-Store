import { useSetImg } from "../../../hooks/useSetImg";

export default function ImgCardProduct({ product }) {
  const { imgIndex, handleImage } = useSetImg();
  return (
    <figure className="my-6 grid cursor-pointer place-items-center duration-500 hover:scale-125 group-hover:shadow-imgShadow2">
      <img
        onClick={() => {
          handleImage(product);
        }}
        className="w-56 rounded-md"
        src={product.images[imgIndex]}
        alt={product.title}
      />
    </figure>
  );
}
