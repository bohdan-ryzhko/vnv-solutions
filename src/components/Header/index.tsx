import sass from "./Header.module.scss";
import { FC } from "react";
import { Container } from "../Container";
import { DesktopNavigation, MobileNavigation, } from "./components";
import { Logo } from "../Logo";
import { BurgerButton } from "./components/BurgerButton";
import { useScroll } from "../../hooks";

export const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useScroll();

  const handleToggleMenu = () => {
    setIsOpenMenu((prev) => !prev)
  }

  return (
    <header className={sass.header}>
      <Container>
        <div className={sass.headerInner}>
          <Logo />
          <BurgerButton
            click={handleToggleMenu}
            isOpenMenu={isOpenMenu}
          />
          <DesktopNavigation />
        </div>
      </Container>
      <MobileNavigation isOpenMenu={isOpenMenu} click={handleToggleMenu} />
    </header>
  )
};
