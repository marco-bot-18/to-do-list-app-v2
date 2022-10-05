import React, { useState, useEffect, useRef } from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef('');

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 2000),
            text: input,
            time: new Date().toLocaleString()
        });

        setInput('');
    }

    const handleChange = ({ target }) => {
        setInput(target.value);
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                {props.edit ?
                    (<>
                        <input
                            type="text"
                            placeholder='Edit Todo'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                            required
                        />
                        <button className='todo-button'>Update</button>
                    </>) :
                    (<>
                        <input
                            type="text"
                            placeholder='Add a todo'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                            required
                        />
                        <button className='todo-button' >Add To-Do </button>
                    </>)
                }
            </form>
        </div>
    )
}

export default ToDoForm