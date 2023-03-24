import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { useTodoApp } from "Hooks/useTodoApp";
import { TodoForm } from "./Components/ToDoForm";
import TodoList from "./Components/TodoList";

export const TodoApp: React.FC = () => {
  // Import functions from custom hook
  const { addHandler, toggleHandler, removeHandler, todos } = useTodoApp();
  return (
    <>
      <HeaderPage
        title={"Complete your tasks in advance!"}
        supTitle={"Todo App"}
      />
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};
