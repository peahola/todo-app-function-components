import Todo from './Todo'

export default function TodoList({todos, editTodo, deleteTodo, toggleDone}) {
    const newList = todos.map((todo) => <Todo key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} toggleDone={toggleDone}/>)
    return (
        <ul>
            {newList}
        </ul>
    )
}