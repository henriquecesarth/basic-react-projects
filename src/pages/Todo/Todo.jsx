import { useState } from 'react'
import './Todo.css'
import { v4 as uuidv4 } from 'uuid'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    const handleSubmit = () => {
        setTodos((todos) => {
            return todos.concat({
                id: uuidv4(),
                text: input
            })
        })
        setInput("")
    }

    const removeTodo = (id) => setTodos((todos) => todos.filter(t => t.id !== id))


    return (
        <div className="todo-page">
            <div className='todo-container'>
                <input type="text" placeholder='New Todo' value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>Submit</button>

                <ul className="todos-list">
                    {todos.map(({ id, text }) => (
                        <li className='todo' key={id}>
                            <span>{text}</span>
                            <button className='close' onClick={() => removeTodo(id)}>x</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo