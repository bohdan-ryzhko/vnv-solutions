import { useEffect, useState } from "react";
import { Service } from "../d";

export const useAnimatedServices = (currentService: Service) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimated(false);
    const animatedElement = document.querySelector(".services__box");

    setTimeout(() => {
      animatedElement?.classList.add("animate__fadeOutUp");
      setIsAnimated(true);
    }, 10);

    return () => {
      animatedElement?.classList.remove("animate__fadeOutUp");
    }
  }, [currentService]);

  return isAnimated;
}
