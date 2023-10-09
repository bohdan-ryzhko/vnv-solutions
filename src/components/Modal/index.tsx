import sass from "./Modal.module.scss";
import { FC, ReactNode } from "react";
import { AiOutlineClose } from 'react-icons/ai';

type ModalProps = {
  title: string,
  children: ReactNode,
  open: boolean,
  handleToggle: () => void,
}

export const Modal: FC<ModalProps> = ({
  title,
  children,
  handleToggle,
  open
}) => {
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
          onClick={handleToggle}
        >
          <AiOutlineClose size={30}/>
        </button>
        </div>
        {children}
      </div>
    </div>
  )
}
