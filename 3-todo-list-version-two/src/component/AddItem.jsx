
function AddItem({todoName, todoDate}) {


    
    return (
        <div className="container kg-row">
        <div className="row">
        <div className="col-6">
            {todoName}
        </div>
        <div className="col-2">
          {todoDate}
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
      </div>
      
    )
}

export default AddItem