import s from "../TodoApp.module.scss";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoProps> = ({ onAdd }) => {
  const ref = useRef<HTMLInputElement>(null);

  const submit = () => {
    if (ref.current && ref.current.value.trim() !== "") {
      onAdd(ref.current.value.trim());
      ref.current.value = "";
    }
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") submit();
  };

  return (
    <div className={s.TodoForm}>
      <input
        name="text"
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        placeholder="Add a new task and press Enter…"
      />
      <button className={s.addBtn} onClick={submit}>
        <FontAwesomeIcon icon={faPlus} />
        Add
      </button>
    </div>
  );
};
