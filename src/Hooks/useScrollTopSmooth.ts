export function useScrollTopSmooth() {
  const useScrollTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useScrollTopSmooth();
}
