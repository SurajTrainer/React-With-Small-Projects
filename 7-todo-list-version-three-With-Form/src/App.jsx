
import AppName from "./component/AppName"
import AddTodo from "./component/AddTodo1"
import TodoItems from "./component/TodoItems"
import './App.css'
import { useState } from "react"
import WelcomeMsg from "./component/WelcomeMsg"



function App() {


  let [todoItems,setotdoItems] = useState([])

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
      <center className="todo-container">
        <AppName/>
          <AddTodo onNewItem= {handleNewItem}/>
          {todoItems.length === 0 && <WelcomeMsg/>}
          <TodoItems todoItems ={todoItems} onDelBtn = {handleDeleteBtn}/>

      </center>

    </>
  )
}

export default App