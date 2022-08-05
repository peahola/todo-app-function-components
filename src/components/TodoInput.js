import { useState } from "react"

export default function TodoInput({ addNewTodo }) {

    const [todoName, setTodoName] = useState('')

    function inputHandler(e) {
        setTodoName(e.target.value)
    }

    function todoHandler(e) {
        if (e.key === "Enter") {
            if (todoName === '') {
                alert("Cant save empty todo.")
                return
            }
            addNewTodo(todoName)
            setTodoName('')
        }
    }
    return (
        <>
            <input onKeyDown={(e) => todoHandler(e)} value={todoName} onChange={(e) => inputHandler(e)} />
        </>
    )
}