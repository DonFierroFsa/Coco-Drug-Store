import { useEffect, useRef, useState } from "react";

export function useScroll() {
  const [scrollUp, setScrollUp] = useState(false);

  const prevScroll = useRef(window.scrollY);

  const handleVisibility = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > prevScroll.current) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
    prevScroll.current = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, [prevScroll]);
  return { scrollUp };
}
