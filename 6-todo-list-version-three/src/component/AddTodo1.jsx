import { useState } from "react";


function AddTodo({onNewItem}) {

    const [itemName,setItemName] = useState([])
    const [itemDate,setItemDate] = useState([])

    let handleChangeName = (event) => {
        setItemName(event.target.value);
    }


    let handleChangeDate = (event) => {
     setItemDate(event.target.value);
    }

    let handleAddbuttonClicked = () => {
        onNewItem(itemName, itemDate)
        setItemName('')
        setItemDate('')
    }
    
    return (
        <div class="container kg-row">

        <div class="row">
          <div class="col-6">
            <input type="text" value={itemName} onChange={handleChangeName} placeholder="Enter todo here" />
          </div>
          <div class="col-2">
            <input type="date" value={itemDate} onChange={handleChangeDate} />
          </div>
          <div class="col-4">
            <button onClick={handleAddbuttonClicked} type="button" class="btn btn-success kg-button">Add</button>
          </div>
        </div>

    </div>
    )
}

export default AddTodo;