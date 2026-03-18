import { HeaderPage } from "Components/HeaderPage/HeaderPage";
import { useTodoApp } from "Hooks/useTodoApp";
import { TodoForm } from "./Components/ToDoForm";
import TodoList from "./Components/TodoList";
import s from "./TodoApp.module.scss";

export const TodoApp: React.FC = () => {
  document.title = "Ensome | Todo App";
  const { addHandler, toggleHandler, removeHandler, todos } = useTodoApp();

  return (
    <>
      <HeaderPage
        title={"Complete your tasks in advance!"}
        supTitle={"Todo App"}
      />
      <section className={s.todoPage}>
        <div className={s.todoInner}>
          <TodoForm onAdd={addHandler} />
          <TodoList
            todos={todos}
            onToggle={toggleHandler}
            onRemove={removeHandler}
          />
        </div>
      </section>
    </>
  );
};
