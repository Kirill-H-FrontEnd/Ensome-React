import { Outlet } from "react-router-dom";
import { Footer } from "./UI Components/Footer/Footer";
import { Header } from "./UI Components/Header/Header";
import { BtnTop } from "./UI Components/ButtonTop/ButtonTop";
import { ToggleMenu } from "./UI Components/ToggleMenu/toggleMenu";
import { useState } from "react";
import { BurgerMenu } from "./UI Components/BurgerMenu/BurgerMenu";

function Layout() {
  // State BurgerMenu and ToggleMenu
  const [activeToggle, setActiveToggle] = useState<boolean>(false);
  // Animate blocks
  function useAnimate() {
    let anim = document.querySelectorAll(".animate");
    for (let i = 0; i < anim.length; i++) {
      let windowH = window.innerHeight;
      let elementTop = anim[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowH - elementVisible) {
        anim[i].classList.add("active");
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
      <BurgerMenu setActiveToggle={setActiveToggle} />
      <ToggleMenu active={activeToggle} setActiveToggle={setActiveToggle} />
    </>
  );
}

export { Layout };
