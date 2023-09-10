import React, { SetStateAction } from "react";
// Styles
import s from "./BurgerMenu.module.scss";

interface IBurgerMenuProps {
  setActiveToggle: React.Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ setActiveToggle }) => {
  return (
    <>
      <section
        onClick={() => {
          setActiveToggle(true);
        }}
        className={`${s.burgerWrapper}`}
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
