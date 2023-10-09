import sass from "./WantButton.module.scss";
import { CSSProperties, FC } from "react";

type WantButtonProps = {
  styles?: CSSProperties,
  text?: string,
}

export const WantButton: FC<WantButtonProps> = ({ styles, text = "want" }) => {
  return (
    <div style={styles} className={sass.button}>
      <button type="button" className={sass.link}>{text}</button>
    </div>
  )
};
