import React, { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.table(todo, ...todos);
    }

    const removeToDo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const editToDo = (id, newValue) => {
        if (!newValue.text || /^\*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)))
    }

    const completeToDo = (id) => {
        let updatedToDos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedToDos);
    }

    return (
        <div>
            <h1>My Plans for Today</h1>
            <ToDoForm onSubmit={addTodo} />
            <ToDo todos={todos} completeToDo={completeToDo} removeToDo={removeToDo} editToDo={editToDo} />
        </div>
    )
}

export default ToDoList