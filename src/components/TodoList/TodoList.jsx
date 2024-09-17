import { useState } from "react";
import todosData from "./../../assets/todos.json";
import { TodoItem } from "./TodoItem";
import s from "./TodoList.module.css";
import { nanoid } from "nanoid";
export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [newTodoValue, setNewTodoValue] = useState("");

  const handleAddNewTodos = () => {
    const newTodo = { todo: newTodoValue, id: nanoid() };
    setTodos((prev) => [...prev, newTodo]);
    setNewTodoValue("");
  };

  const handleDeleteTodos = (id) => {
    console.log(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="flex">
        <input
          value={newTodoValue}
          onChange={(e) => setNewTodoValue(e.target.value)}
          className={s.input}
        />
        <button onClick={handleAddNewTodos} className="btn border">
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            handleDeleteTodos={handleDeleteTodos}
          />
        ))}
      </ul>
    </>
  );
};
