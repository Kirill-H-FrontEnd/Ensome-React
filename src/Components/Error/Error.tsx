// React
import { FC } from "react";
// Styles
import s from "./Error.module.scss";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

type TError = {
  value: string;
};

export const Error: FC<TError> = ({ value }) => {
  return (
    <span className={s.error}>
      <h1>{value}</h1>
      <a href="">
        <FontAwesomeIcon icon={faArrowsRotate} />
      </a>
    </span>
  );
};
