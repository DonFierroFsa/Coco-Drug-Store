import { useEffect, useRef, useState } from "react";

export function useInfinityScroll({
  itemsToLoad,
  reload,
  distance = "-150px",
}) {
  const count = useRef(2);
  const visor = useRef();

  const [lazyItems, setLazyItems] = useState(
    itemsToLoad.slice(0, count.current),
  );
  const [isEnd, setIsEnd] = useState(false);

  const options = {
    rootMargin: distance,
  };
  useEffect(() => {
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        count.current < itemsToLoad.length
          ? ((count.current += 4),
            setLazyItems(itemsToLoad.slice(0, count.current)))
          : setIsEnd(true);
      }
    };
    setIsEnd(false);
    const observer = new IntersectionObserver(callback, options);

    observer.observe(visor.current);

    setLazyItems(itemsToLoad.slice(0, count.current));
    return () => {
      observer.disconnect();
    };
  }, [reload]);

  return { isEnd, lazyItems, visor };
}
