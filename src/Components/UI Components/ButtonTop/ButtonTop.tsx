// Styles
import s from "./_BtnTop.module.scss";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// Hooks
import { useState } from "react";
export const BtnTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      className={`${s.btnTop} ${visible ? s.visible : ""}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </a>
  );
};
