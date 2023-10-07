import sass from "./Header.module.scss";
import { FC } from "react";
import { Container } from "../Container";

const navigation = [
  { text: "services", anchor: "", id: "1" },
  { text: "team", anchor: "", id: "2" },
  { text: "projects", anchor: "", id: "3" },
];

export const Header: FC = () => {
  return (
    <header className={sass.header}>
      <Container>
        <div className={sass.headerInner}>
          <div className={sass.logo}>
            <img width={150} height={150} src="https://vnv.solutions/img/vnv%20logo-05.png" alt="Logo" />
          </div>
          <nav className={sass.navigation}>
            <ul className={sass.navigationList}>
              {
                navigation.map(({ text, anchor, id }) => (
                  <li key={id}>
                    <a href={anchor}>
                      <p>{text}</p>
                      <p>{text}</p>
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
};
