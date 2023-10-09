import sass from "./SubmitButton.module.scss";
import { FC } from "react";

export const SubmitButton: FC = () => {
  return (
    <div className={sass.submitWrapper}>
      <button type="submit" className={sass.submit}>
        Send
        <span className={sass.span}></span>
      </button>
    </div>
  );
}
