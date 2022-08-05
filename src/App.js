import { useState } from "react";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])

  function addNewTodo(todoName) {
    const updatedTodo = {
      name: todoName,
      id: uuidv4(),
      markedDone: false
    }
    const updatedList = [...todos, updatedTodo]
    setTodos(updatedList)
  }

  function editTodo(newTodo, targetUuid){
    const updatedList = todos.map((todo) => {
      if (targetUuid === todo.id) {
        return {
          ...todo,
          name: newTodo
        }
      }
      return todo
    })
    setTodos(updatedList)
  }

  function deleteTodo(targetUuid) {
    const updatedList = todos.filter((todo) => targetUuid !== todo.id)
    setTodos(updatedList)
  }

  function toggleDone(targetUuid) {
    const updatedList = todos.map((todo)=> {
      if (targetUuid === todo.id) {
        return{
          ...todo,
          markedDone: !todo.markedDone
        }
      }
      return todo
    })
    setTodos(updatedList)
  }

  return (
    <div className="App">
      <TodoInput addNewTodo={addNewTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} toggleDone={toggleDone}/>
    </div>
  );
}

export default App;
