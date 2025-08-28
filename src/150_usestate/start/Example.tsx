import { useState } from "react";

type Todo = {
  id: number,
  text: string
}

type User = {
  name: string,
  age: number
}

const Example = () => {
  const [ text, setText ] = useState('Hello');
  useState(0);

  const [animal, setAnimals] = useState(['dog', 'cat', 'bird']);
  const [ user, setUser ] = useState<User[]>([{name: 'tom', age: 30 }])
  const [todo, setTodos] = useState<Todo[]>([{id: 1, text: 'hello'}]);
};

export default Example;
