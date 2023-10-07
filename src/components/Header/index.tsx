import sass from "./Header.module.scss";
import { FC } from "react";
import { Container } from "../Container";
import { DesktopNavigation, MobileNavigation, } from "./components";
import { Logo } from "../Logo";
import { BurgerButton } from "./components/BurgerButton";
import { useScroll } from "../../hooks";

export const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useScroll();

  return (
    <header className={sass.header}>
      <Container>
        <div className={sass.headerInner}>
          <Logo />
          <BurgerButton
            click={() => setIsOpenMenu((prev) => !prev)}
            isOpenMenu={isOpenMenu}
          />
          <DesktopNavigation />
        </div>
      </Container>
      <MobileNavigation isOpenMenu={isOpenMenu} />
    </header>
  )
};
