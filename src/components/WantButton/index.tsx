import "./WantButton.scss";
import { CSSProperties, FC } from "react";

type WantButtonProps = {
  styles?: CSSProperties,
}

export const WantButton: FC<WantButtonProps> = ({ styles }) => {
  return (
    <div style={styles} className="button">
      <button className="link">want</button>
    </div>
  )
};
