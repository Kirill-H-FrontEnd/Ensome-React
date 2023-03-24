export function useAnimate(active: string) {
  function useAnimate() {
    let anims = document.querySelectorAll(".animate");

    for (let i = 0; i < anims.length; i++) {
      let windowH = window.innerHeight;
      let elementTop = anims[i].getBoundingClientRect().top;
      let elementVisble = 150;

      if (elementTop < windowH - elementVisble) {
        anims[i].classList.add(active);
      }
    }
  }

  window.addEventListener("scroll", useAnimate);
}
