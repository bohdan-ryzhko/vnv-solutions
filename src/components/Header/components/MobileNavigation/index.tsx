import { navigationItems } from "../../../../constants";
import sass from "./MobileNavigation.module.scss";
import { FC } from "react";

type MobileNavigationProps = {
  isOpenMenu: boolean,
}

export const MobileNavigation: FC<MobileNavigationProps> = ({ isOpenMenu }) => {
  return (
    <div className={isOpenMenu ? sass.backdropActive : sass.backdrop}>
      <nav className={sass.navigation}>
        <ul className={sass.navigationList}>
          {
            navigationItems.map(({ text, anchor, id }) => <li key={id}>
              <a href={anchor}>{text}</a>
            </li>)
          }
        </ul>
      </nav>
    </div>
  )
};
