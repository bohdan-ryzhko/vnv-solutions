import "./WantButton.scss";
import { CSSProperties, FC } from "react";

type WantButtonProps = {
  styles?: CSSProperties,
  text?: string,
}

export const WantButton: FC<WantButtonProps> = ({ styles, text = "want" }) => {
  return (
    <div style={styles} className="button">
      <button className="link">{text}</button>
    </div>
  )
};
