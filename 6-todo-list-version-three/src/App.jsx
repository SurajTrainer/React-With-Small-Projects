
import AppName from "./component/AppName"
import AddTodo from "./component/AddTodo1"
import TodoItems from "./component/TodoItems"
import './App.css'
import { useState } from "react"
import WelcomeMsg from "./component/WelcomeMsg"



function App() {

  const temptodoItems = [{
    name : 'Take Apple',
    date : '01/12/2024'
  },{
    name : 'Drink The Mango Shake',
    date : '10/01/2024'
  }]

  let [todoItems,setotdoItems] = useState(temptodoItems)

  let handleNewItem = (itemName,itemDate) => {
      const newItems = [...todoItems , {name : itemName,
      date : itemDate}]
      setotdoItems(newItems)
  }

  const handleDeleteBtn = (delItem)=> {
    let newTodosItem = todoItems.filter(item => item.name !== delItem)
    setotdoItems(newTodosItem)
  }
  return (
    <>
      <center class="todo-container">
        <AppName/>
          <AddTodo onNewItem= {handleNewItem}/>
          {todoItems.length === 0 && <WelcomeMsg/>}
          <TodoItems todoItems ={todoItems} onDelBtn = {handleDeleteBtn}/>

       

      </center>

    </>
  )
}

export default App