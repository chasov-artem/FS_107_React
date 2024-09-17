import s from "./TodoList.module.css";
export const TodoItem = ({ id, completed, todo, handleDeleteTodos }) => {
  return (
    <li className={s.item}>
      <input type="checkbox" />
      <span>{todo}</span>
      <button onClick={() => handleDeleteTodos(id)} className="btn border">
        Delete
      </button>
    </li>
  );
};
