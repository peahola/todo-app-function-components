import { useState } from "react"
export default function Todo({todo, editTodo, deleteTodo, toggleDone}) {

    const [inEditMode, setInEditMode] = useState(false)
    const [todoName, setTodoName] = useState(todo.name)
    function inputHandler(e) {
        setTodoName(e.target.value)
    }
    function saveNewTodo() {
        if (todoName === '') {
            alert("Cant save empty todo")
        } else {
            editTodo(todoName, todo.id)
            setInEditMode(false)
        }
    }
    if (inEditMode) {
        return (
            <>
            <input value={todoName} onChange={(e) => inputHandler(e)}/>
            <button onClick={saveNewTodo}>Save Edit</button>
            </>
        )
    }
    const lineStyleTrue = {
        textDecoration: 'line-through'
    }
    const lineStyleFalse = {
        textDecoration: 'none'
    }
    return(
        <li style={todo.markedDone ? lineStyleTrue: lineStyleFalse}>
            <input type="checkbox" onChange={() => toggleDone(todo.id)} checked={todo.markedDone}/>
            {todo.name}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => setInEditMode(true)}>Edit</button>
        </li>
    )
}