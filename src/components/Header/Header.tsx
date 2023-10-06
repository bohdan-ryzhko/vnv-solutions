import { Container } from "../Container";
import sass from "./Header.module.scss";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className={sass.header}>
      <Container>
        <h1>Test task</h1>
      </Container>
    </header>
  )
}
