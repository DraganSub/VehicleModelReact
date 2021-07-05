import React from "react"

const AddVehicleForm = ({handleSubmit,setName,setAbrv}) => {
    
  return (
    <div>        
      <h3  className="d-flex justify-content-center" style={{paddingBottom : "20px"}}>ADD NEW VEHICLE AND MODEL</h3>
      <form  onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Add name</span>
            </div>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Vehicle name" 
              aria-label="Username" 
              aria-describedby="basic-addon1" 
              required onChange={(e) => setName(e.target.value)}
            />
          </div> 
        </div>   
                   
        <div>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Add name</span>
            </div>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Vehicle model" 
              aria-label="Username" 
              aria-describedby="basic-addon1" 
              required onChange={(e) => setAbrv(e.target.value)}
            />
          </div> 
        </div>   
                   
        <div style={{padding: "10px"}}>
          <button className="btn btn-success" style={{float:"right"}} >
            Submit
          </button>
        </div>              
      </form>
    </div>
  )
}

export default AddVehicleForm