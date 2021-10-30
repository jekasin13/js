import React from "react";
import TodoList from "./Todo/todolist";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {

  const [todos, setTodos] = React.useState(  [
    {id:1,completed: false, title: 'Купить хлеб'},
    {id:2,completed: false, title: 'Купить пиццу'},
    {id:3,completed: false, title: 'РЕал'}
  ])


  function toggleTodo (id){
     setTodos( 
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
    }
    function removeTodo(id){
      setTodos(todos.filter(todo => todo.id !==id ))
    }
 
  return (
  <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
     <h1>React tutor</h1>
     <AddTodo />
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>huio</p> }
     
    </div>
  </Context.Provider>
     )
 
}

export default App;
