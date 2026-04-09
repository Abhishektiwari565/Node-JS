import { useEffect, useState } from "react";
import API from "../api";

export default function Todo({ userId }) {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // get todos
  const getTodos = async () => {
    const res = await API.get("/todos", {
      headers: { userid: userId },
    });
    setTodos(res.data.todos);
  };

  useEffect(() => {
    if (userId) getTodos();
  }, [userId]);

  // add todo
  const addTodo = async () => {
    await API.post(
      "/todos",
      { text },
      {
        headers: { userid: userId },
      }
    );

    setText("");
    getTodos();
  };

  // delete todo
  const deleteTodo = async (id) => {
    await API.delete(`/todos/${id}`, {
      headers: { userid: userId },
    });
    getTodos();
  };

  return (
    <div>
      <h2>Todo</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((t) => (
        <div key={t._id}>
          {t.text}
          <button onClick={() => deleteTodo(t._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}