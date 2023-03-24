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
    return <p className="noTasks">There's nothing here.</p>;
  }
  return (
    <>
      {todos.map((todo) => {
        const classes = ["Todo-list"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <div className={classes.join(" ")} key={todo.id}>
            <label className="toggler-wrapper style-1">
              <input
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                type="checkbox"
              />
              <div className="toggler-slider">
                <div className="toggler-knob">
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
