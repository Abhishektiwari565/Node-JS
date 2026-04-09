import { useState } from "react";
import Login from "./components/Login.jsx";
import Todo from "./components/Todo.jsx";

function App() {
  const [userId, setUserId] = useState(
    localStorage.getItem("userId") || ""
  );

  return (
    <>
      {!userId ? (
        <Login setUserId={setUserId} />
      ) : (
        <Todo userId={userId} />
      )}
    </>
  );
}

export default App;