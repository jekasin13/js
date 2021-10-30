import React from "react";
import TodoList from "./Todo/todolist";

function App() {
  let todos = [
    {id:1,completed: false, title: 'Купить хлеб'},
    {id:2,completed: false, title: 'Купить пиццу'},
    {id:3,completed: false, title: 'РЕал'}
  ]

  function toggleTodo (id){
      todos = todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
  }
  return (<div className="wrapper">
     <h1>React tutor</h1>
     
     <TodoList todos={todos} onToggle={toggleTodo}/>
     </div>
     )

}

export default App;
