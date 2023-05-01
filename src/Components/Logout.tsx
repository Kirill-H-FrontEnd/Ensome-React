import { Outlet } from "react-router-dom";
import { Footer } from "./UI Components/Footer/Footer";
import { Header } from "./UI Components/Header/Header";
import { BtnTop } from "./UI Components/ButtonTop/ButtonTop";
import { ToggleMenu } from "./UI Components/ToggleMenu/toggleMenu";
import { useState } from "react";
import { BurgerMenu } from "./UI Components/BurgerMenu/BurgerMenu";

function Logout() {
  // State BurgerMenu and ToggleMenu
  const [activeToggle, setActiveToggle] = useState<boolean>(false);
  const [burgerActive, setBurgerActive] = useState<boolean>(false);
  // Animate blocks
  function useAnimate() {
    let anims = document.querySelectorAll(".animate");
    for (let i = 0; i < anims.length; i++) {
      let windowH = window.innerHeight;
      let elementTop = anims[i].getBoundingClientRect().top;
      let elementVisble = 150;

      if (elementTop < windowH - elementVisble) {
        anims[i].classList.add("active");
      }
    }
  }
  window.addEventListener("scroll", useAnimate);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BtnTop />
      <BurgerMenu
        activeBurger={burgerActive}
        setBurgerActive={setBurgerActive}
        setActiveToggle={setActiveToggle}
      />
      <ToggleMenu
        active={activeToggle}
        setActiveToggle={setActiveToggle}
        setBurgerActive={setBurgerActive}
      />
    </>
  );
}

export { Logout };
