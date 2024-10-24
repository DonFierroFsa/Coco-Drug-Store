import { useState } from "react";

export function useSetImg() {
  const [imgIndex, setImgIndex] = useState(0);
  const handleImage = (product) => {
    const imgQuantity = product.images.length;
    if (imgIndex < imgQuantity - 1) {
      setImgIndex((prevState) => prevState + 1);
    } else {
      setImgIndex(0);
    }
  };

  return { imgIndex, handleImage };
}
