import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item">
        <div className="d-flex">
            <div className="p-4 flex-grow-1">
                <input defaultValue={todo.title} className="wd-rounded fs-5"
                onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
          </div>
            <div className="p-2">
                <button onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click" className="me-2 btn btn-warning fs-5"> Update </button>
                <button onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click" className="me-2 btn btn-success fs-5"> Add </button>
            </div>
        </div>
      </li>
  );}
  