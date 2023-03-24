export function useScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  scrollToTop();
}
