import React from "react";
import './RenderTodo.css'
export default function RenderTodo({todo, todos, setTodos}) {
    const {id,activity, status} = todo;
    function handleDeletion({target}) {
        const idToDelete = target.parentNode.id;
        const updatedTodos = todos.filter(todo => String(todo.id) !== String(idToDelete));
        setTodos(updatedTodos);
    }

    
    function changeStatus({ target }) {
        const idToChange = target.parentNode.id;
        const updatedTodos = todos.map(todoToChange => {
          if (String(todoToChange.id) === idToChange) {
            if (todoToChange.status === 'pending') {
              todoToChange.status = 'started';
            } else if (todoToChange.status === 'started') {
              todoToChange.status = 'completed';
            }
          }
          return todoToChange;
        });
      
        setTodos(updatedTodos);
    }      

    let icon= ''
    switch(status) {
        case 'pending':
            icon = '⌛';
            break;
        case 'started':
            icon = ' 🚀';
            break;
        case 'completed':
            icon = '✅';
            break;
        default:
            icon = ''
    }
    
    return (
        <div className="todo" id={id}> 
            <div className="status icon" title={status}>
                {icon}
            </div>
            <div className="activity">
                {activity}
            </div>
            <div className="delete icon" onClick={handleDeletion} title='Delete activity'>❌</div>
            <div className="progress icon" onClick={changeStatus} title={status === 'pending' ? 'Start Activity' : 'Complete Activity'}>➡️</div>
        </div>
    )
}