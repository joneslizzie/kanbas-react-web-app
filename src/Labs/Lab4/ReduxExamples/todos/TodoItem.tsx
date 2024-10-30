import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo }: any) {
    const dispatch = useDispatch();
    return (
        
            <li key={todo.id} className="list-group-item">
                <div className="d-flex">
                <span className="p-4 flex-grow-1 fs-5">{todo.title}</span>
                <div className="p-2">
                    <button onClick={() => dispatch(setTodo(todo))}
                            id="wd-set-todo-click" className="me-2 btn btn-primary fs-5"> Edit </button>  
                    <button onClick={() => dispatch(deleteTodo(todo.id))}
                            id="wd-delete-todo-click"  className="me-2 btn btn-danger fs-5"> Delete </button>
                    </div>
                </div>
            </li>
       
    );
}