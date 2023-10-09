import sass from "./BurgerButton.module.scss";
import { FC } from "react";

type BurgerButtonProps = {
  click: () => void,
  isOpenMenu: boolean,
}

export const BurgerButton: FC<BurgerButtonProps> = ({ click, isOpenMenu }) => {
  return (
    <button type="button" onClick={click} className={isOpenMenu? sass.burgerBtnActive : sass.burgerBtn}>
      <div className={sass.burgerBtnInner}>
        <span className={isOpenMenu ? sass.burgerLineActive : sass.burgerLine} />
        <span className={isOpenMenu ? sass.burgerLineActive : sass.burgerLine} />
        <span className={isOpenMenu ? sass.burgerLineActive : sass.burgerLine} />
      </div>
    </button>
  )
};
