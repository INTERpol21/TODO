import {TodoListInterface} from "../interfaces";
import TodoItem from "./todo-item";
import './../Styles/styles.css'


const TodoList = (props: TodoListInterface) => {
    return (
        <div className="todo-list">
            <ul>
                {props.todos.map((todo) =>
                    <li key={todo.id}>
                        <TodoItem todo={todo}
                                  handleTodoBlur={props.handleTodoBlur}
                                  handleTodoComplete={props.handleTodoComplete}
                                  handleTodoRemove={props.handleTodoRemove}
                                  handleTodoUpdate={props.handleTodoUpdate}/>
                    </li>)}
            </ul>
        </div>
    )
}

export default TodoList