import s from "../TodoApp.module.scss";
import { ITodo } from "Models/Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoListProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return (
      <div className={s.noTasks}>
        <span className={s.noTasksIcon}>📋</span>
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }

  const done = todos.filter((t) => t.completed).length;
  const pct = Math.round((done / todos.length) * 100);

  return (
    <>
      <div className={s.statsBar}>
        <p className={s.statsText}>
          <span>{todos.length}</span> task{todos.length !== 1 ? "s" : ""} ·{" "}
          <span>{done}</span> completed
        </p>
        <div className={s.statsProgress}>
          <div className={s.statsProgressBar} style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className={s.TodoList}>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`${s.TodoItem} ${todo.completed ? s.completed : ""}`}
          >
            <label className={s.checkWrap}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <div className={s.checkBox}>
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </label>

            <span className={s.taskTitle}>{todo.title}</span>

            <button
              className={s.deleteBtn}
              onClick={() => onRemove(todo.id)}
              title="Delete task"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
