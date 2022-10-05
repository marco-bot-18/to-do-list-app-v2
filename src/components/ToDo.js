import React, { useState } from 'react';
import ToDoForm from './ToDoForm';

import { AiOutlineEdit, AiOutlineCloseSquare, AiOutlineCheckSquare } from 'react-icons/ai';
import './../assets/css/App.css';

function ToDo({ todos, completeToDo, removeToDo, editToDo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        time: null
    });

    const submitEdit = value => {
        editToDo(edit.id, value);
        setEdit({
            id: null,
            value: '',
            time: new Date().toLocaleString()
        });
    };

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitEdit} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} >
            <div className='todo-text' key={todo.id} onClick={() => completeToDo(todo.id)}>
                {todo.text} < br />
                <span className='time_date'> {todo.time}</span>
            </div>
            <div className='icons'>
                <AiOutlineCheckSquare onClick={() => completeToDo(todo.id)} />
                <AiOutlineEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='delete-icon'
                />
                <AiOutlineCloseSquare
                    onClick={() => removeToDo(todo.id)}
                    className='delete-icon'
                />
            </div>
        </div >
    ))

}
export default ToDo