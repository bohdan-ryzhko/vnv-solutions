import { Dispatch, SetStateAction, useEffect } from "react"

type UseOpenModalType = {
  seconds: number,
  handleToggle: Dispatch<SetStateAction<boolean>>,
}

export const useOpenModal = ({ seconds, handleToggle }: UseOpenModalType) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleToggle(true);
    }, seconds * 1000);

    return () => {
      handleToggle(false);
      clearTimeout(timeoutId);
    }
  }, [handleToggle, seconds]);
}
