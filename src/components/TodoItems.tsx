import {Todo} from "./Type"

type Props = {
    todo: Todo
    completeTodo: (todo: Todo) => void
    deleteTodo: (todo: Todo) => void
}

export const TodoItems: React.FC<Props> = ({todo, completeTodo, deleteTodo}) => {
    return (
        <li className="list-item">
            <label>
                <input type="checkbox"
                    className="checkbox"
                    onClick={() => completeTodo(todo)}
                    defaultChecked={todo.done}
                />
                <span className="checkbox-label">{ todo.title }</span>
            </label>
            <button
                className="delete-btn"
                onClick={() => deleteTodo(todo)}
            >delete</button>
        </li>


    );
};