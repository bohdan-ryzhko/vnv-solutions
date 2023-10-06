import sass from "./Container.module.scss";
import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={sass.container}>{children}</div>
);
