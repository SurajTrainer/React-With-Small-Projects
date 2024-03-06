
import AppName from "./component/AppName"
import AddTodo from "./component/AddTodo1"
import TodoItems from "./component/TodoItems"
import './App.css'



function App() {

  const todoItems = [{
    name : 'Take Apple',
    date : '01/12/2024'
  },{
    name : 'Drink The Mango Shake',
    date : '10/01/2024'
  },{
    name : 'take banana',
    date : '01/12/2024'
  },]

  return (
    <>
      <center class="todo-container">
        <AppName/>
          <AddTodo/>
          <TodoItems todoItems ={todoItems}/>

       

      </center>

    </>
  )
}

export default App
