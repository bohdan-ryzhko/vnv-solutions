import sass from "./MobileNavigation.module.scss";
import { navigationItems } from "../../../../constants";
import { FC } from "react";

type MobileNavigationProps = {
  isOpenMenu: boolean,
  click: () => void,
}

export const MobileNavigation: FC<MobileNavigationProps> = ({ isOpenMenu, click }) => {
  return (
    <div className={isOpenMenu ? sass.backdropActive : sass.backdrop}>
      <nav className={sass.navigation}>
        <ul className={sass.navigationList}>
          {
            navigationItems.map(({ text, anchor, id }) => <li key={id}>
              <a className={sass.link} onClick={click} href={anchor}>{text}</a>
            </li>)
          }
        </ul>
      </nav>
    </div>
  )
};
