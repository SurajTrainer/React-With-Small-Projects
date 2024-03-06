

function Today() {
    let todayTime = new Date();

    // let hours = todayTime.getHours();
    // let minutes = todayTime.getMinutes();
    // let seconds = todayTime.getSeconds();

 

    // let total = hours + " : "+ minutes + " : "+ seconds;


    return (
        <div class="">
            {/* <h2>Date is -- </h2>
  <h3 class="card-header" style={{backgroundColor:'lightgoldenrodyellow',padding:'12px',fontSize:"20px"}}>{total}</h3> */}

  {/* 2nd way is */}

  <p className="lead">This is the current Time - {todayTime.toLocaleDateString()} - {todayTime.toLocaleTimeString()}</p>
 
</div>
    )
}

export default Today;