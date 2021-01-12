import React, { useState } from "react"

import { Todo } from "./Type"

type Props = {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    todos: Todo[]
}

export const Input: React.FC<Props> = ({setTodos, todos}) => {
    const [ inputTodo, setInputTodo ] = useState<string>('')
    const [ count, setCount ] = useState<number>(todos.length + 1)

    const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTodo(e.target.value)
    }

    const addTodo = () => {
        setCount(count + 1)
        
        const newTodo: Todo = {
            id: count,
            title: inputTodo,
            done: false
        }

        setTodos([newTodo, ...todos])
        setInputTodo('')
    }

    return (
        <>
            <div className="input-area">
                <input type="text"
                    className="input"
                    value={inputTodo}
                    onChange={changeText} />
                <button onClick={() => addTodo()}>Add</button>
            </div>    
        </>
    );
}