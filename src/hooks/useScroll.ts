import { useEffect, useState } from "react";

type UseScrollHook = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const useScroll: () => UseScrollHook = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpenModal]);

  return [isOpenModal, setIsOpenModal];
};
