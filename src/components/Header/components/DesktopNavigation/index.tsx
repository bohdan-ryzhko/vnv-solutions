import sass from "./DesktopNavigation.module.scss";
import { FC } from "react";
import { navigationItems } from "../../../../constants";

export const DesktopNavigation: FC = () => {
  return (
    <nav className={sass.navigation}>
      <ul className={sass.navigationList}>
        {
          navigationItems.map(({ text, anchor, id }) => (
            <li className={sass.navigationItem} key={id}>
              <a className={sass.navigationLink} href={anchor}>
                <p className={sass.textLinkTop}>{text}</p>
                <p className={sass.textLinkBottom}>{text}</p>
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
