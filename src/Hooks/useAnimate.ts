export function useAnimate(active: string) {
  function useAnimate() {
    let anim = document.querySelectorAll(".animate");

    for (let i = 0; i < anim.length; i++) {
      let windowH = window.innerHeight;
      let elementTop = anim[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowH - elementVisible) {
        anim[i].classList.add(active);
      }
    }
  }

  window.addEventListener("scroll", useAnimate);
}
