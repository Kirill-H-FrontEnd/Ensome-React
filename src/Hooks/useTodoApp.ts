import { ITodo } from "Models/Todo";
import { useEffect, useState } from "react";

export function useTodoApp() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm(`Delete task?`);
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return { addHandler, toggleHandler, removeHandler, todos };
}
