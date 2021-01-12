import React, { useState } from "react"

import "./style.css"
import { Todo } from "./components/Type"
import { TodoList } from "./components/TodoList"
import {Input} from "./components/Input"

const initialState: Todo[] = [
  {
    id: 2,
    title: "next Todos",
    done: false
  },
  {
    id: 3,
    title: "this is best choice",
    done: true
  }
]

export const App = () => {
  const [todo, setTodo] = useState(initialState)
  
  return (
    <>
      <Input setTodos={setTodo} todos={todo} />
      <TodoList setTodos={setTodo} todos={todo} />
    </>
  );
};

export default App;
