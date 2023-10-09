import sass from "./Modal.module.scss";
import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { useOpenModal } from "../../hooks";

type ModalProps = {
  title: string,
  children: ReactNode,
  open: boolean,
  handleToggle: Dispatch<SetStateAction<boolean>>,
}

export const Modal: FC<ModalProps> = ({
  title,
  children,
  handleToggle,
  open
}) => {

  useOpenModal({ seconds: 15, handleToggle });

  return (
    <div
      className={open ? sass.backdropActive : sass.backdrop}
    >
      <div className={sass.modalBody}>
        <div className={sass.modalTop}>
          <h2 className={sass.title}>{title}</h2>
          <button
          type="button"
          className={sass.modalClose}
          onClick={() => handleToggle(false)}
        >
          <AiOutlineClose size={30}/>
        </button>
        </div>
        {children}
      </div>
    </div>
  )
}
