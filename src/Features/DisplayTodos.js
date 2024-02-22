import React from "react";
import RenderTodo from './RenderTodo';

export default function DisplayTodos({todos, status, setTodos}) {
    return (
        <div className="todo-section">
            {todos.map(todo => {
                if( String(todo.status)  === String(status)) {
                    return <RenderTodo key = {todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                }
                return null;
            })}
        </div>
    )
}
