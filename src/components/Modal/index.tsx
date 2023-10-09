import sass from "./Modal.module.scss";
import { Title } from "../Title";
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
        <button
          type="button"
          className={sass.modalClose}
          onClick={handleToggle}
        >
          <AiOutlineClose size={30}/>
        </button>
        <Title title={title} />
        {children}
      </div>
    </div>
  )
}
