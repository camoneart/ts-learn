import { useState } from "react";
import TodoList from "./TodoList";

export type Todo = {
  id: number;
  text: string;
};

const Example = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    setTodos((state) => [...state, { id: state.length + 1, text: inputText }]);
    setInputText("");
  };

  return (
    <div>
      <h3>Todoリスト</h3>
      <input type="text" value={inputText} onChange={handleChange} />
      <button disabled={!inputText} onClick={handleClick}>add</button>

      <TodoList todos={todos} />
    </div>
  );
};

export default Example;
