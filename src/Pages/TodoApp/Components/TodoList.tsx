// Styles
import s from "../TodoApp.module.scss";
import { ITodo } from "Models/Todo";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface TodoListProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle,
}) => {
  if (todos.length === 0) {
    return <p className={s.noTasks}>There's nothing here.</p>;
  }
  return (
    <>
      {todos.map((todo) => {
        const classes = [`${s.TodoList}`];
        if (todo.completed) {
          classes.push(`${s.completed}`);
        }
        return (
          <div className={classes.join(" ")} key={todo.id}>
            <label className={`${s.togglerWrapper} ${s.style_1}`}>
              <input
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                type="checkbox"
              />
              <div className={s.togglerSlider}>
                <div className={s.togglerKnob}>
                  <span>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </div>
              </div>
            </label>
            <h1>{todo.title}</h1>
            <button onClick={() => onRemove(todo.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};
export default TodoList;
