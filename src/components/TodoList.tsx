import React from "react"

import { TodoItems } from "./TodoItems"
import { Todo } from "./Type"

type Props = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

    const completeTodo = (todos: Todo) => {
        setTodos(prev => prev.map(t =>
            t.id === todos.id
                ? { ...todos, done: !todos.done }
                : t
            ))
    }

    const deleteTodo = (todos: Todo) => {
        setTodos(prev => prev.filter(t =>
            t.id !== todos.id
            ))
    }

    return (
        <div className="inner">
            {
                todos.length <= 0
                    ? "登録されたTODOはありません"
                    : <ul className="todo-list">
                        {
                            todos.map( todos => (
                                <TodoItems
                                    key={todos.id}
                                    todo={todos}
                                    deleteTodo={deleteTodo}
                                    completeTodo={completeTodo}
                                />
                            ))
                        }
                    </ul>
            }
        </div>
    ); 
}