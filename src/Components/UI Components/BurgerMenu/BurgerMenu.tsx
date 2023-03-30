import React, { SetStateAction } from "react";
// Sttyles
import s from "./BurgerMenu.module.scss";

interface IBurgerMenuProps {
  activeBurger: boolean;
  setBurgerActive: React.Dispatch<SetStateAction<boolean>>;
  setActiveToggle: React.Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({
  setActiveToggle,
  activeBurger,
  setBurgerActive,
}) => {
  return (
    <>
      <section
        onClick={() => {
          setActiveToggle(true);
          setBurgerActive(true);
        }}
        className={`${s.burgerWrapper} ${activeBurger ? s.active : ""}`}
      >
        <div className={s.burgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
};
