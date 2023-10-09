import sass from "./MagnitButton.module.scss";
import { FC } from "react";

type MagnitButtonProps = {
  text: string,
  href?: string,
}

export const MagnitButton: FC<MagnitButtonProps> = ({ text, href }) => (
  <>
    {
      href
        ? (
          <a className={sass.buttonAnimation} href={href}>
            {text}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        )
        : (
          <button type="button" className={sass.buttonAnimation}>
            {text}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )
    }
  </>
);
