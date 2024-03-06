
function AddItem1() {

    let todoName = 'Go to Coka Cola'
    let todoDate = '04/03/2024'
    
    return (
        <div class="container kg-row">
        <div class="row">
        <div class="col-6">
            {todoName}
        </div>
        <div class="col-2">
          {todoDate}
        </div>
        <div class="col-4">
          <button type="button" class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
      </div>
      
    )
}

export default AddItem1