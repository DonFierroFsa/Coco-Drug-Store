import { useState } from "react";

export function useModal() {
  const [isVisible, setIsVisible] = useState(false);
  function handleModal() {
    setIsVisible(!isVisible);
  }
  return { isVisible, setIsVisible, handleModal };
}
