
import AppName from "./component/AppName"
import AddTodo from "./component/AddTodo1"
import AddItem1 from "./component/AddItem1"
import AddItem2 from "./component/AddItem2"
import './App.css'



function App() {


  return (
    <>
      <center class="todo-container">
        <AppName/>
          <AddTodo/>
          <AddItem1/>
          <AddItem2/>

      </center>

    </>
  )
}

export default App
