import sass from "./CreateOrderButton.module.scss";
import { FC } from "react";

export const CreateOrderButton: FC = () => (
  <button type="button" className={sass.neonShadow}>
    buy
  </button>
)