import { useRef } from "react";

export const useMoveScroll = (scrollAmount = 400) => {
  const sliderRef = useRef();

  const onScroll = (direction) => {
    if (sliderRef.current) {
      if (direction === "left") {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "right") {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return {
    sliderRef,
    onScroll,
  };
};
