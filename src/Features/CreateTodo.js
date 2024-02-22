import React, { useState } from "react";

export default function CreateTodo({todos, setTodos}) {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        
        setInputValue(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submit action
        if(!inputValue.trim()) return;
        setTodos([...todos, {id:todos.length + 1, activity: inputValue, status: 'pending'}]);
        setInputValue('')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter some activity"
            />
            <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}