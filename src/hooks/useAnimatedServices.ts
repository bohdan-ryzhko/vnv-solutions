import { useEffect, useState } from "react";
import { Service } from "../d";

export const useAnimatedServices = (currentService: Service) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(true);

  useEffect(() => {
    setIsAnimated(false);
    const animatedElement = document.querySelector(".services__box");

    setTimeout(() => {
      setIsAnimated(true);
      animatedElement?.classList.add("animate__fadeInUp");
    }, 10);
    
    return () => {
      animatedElement?.classList.remove("animate__fadeInUp");
      setIsAnimated(false);
    }
  }, [currentService]);

  return isAnimated;
}
