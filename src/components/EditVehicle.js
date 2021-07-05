import React from "react"

const EditVehicleForm = ({showForm,setEditName,setEditAbrv,setShowForm}) =>{
  const pStyle ={
    fontSize: "14px",
    color:"green"
  }
  return (
    <div>
      { showForm ? 
        <form>
          <div>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Edit name</span>
              </div>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Vehicle name" 
                aria-label="Username" 
                aria-describedby="basic-addon1" 
                required onChange={(e) => setEditName(e.target.value)}
              />
            </div> 
          </div>   

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Edit Model</span>
            </div>
            <textarea 
              className="form-control" 
              placeholder="Vehicle Model" 
              aria-label="With textarea"
              required 
              onChange={(e) => setEditAbrv(e.target.value)} 
            />
          </div>

          <p style={pStyle}><i>To edit your vehicles, please fill this form and click edit button on item you want to edit(If you are done editing just hit <u>"remove edit button")</u></i></p>
          
          <div className="col text-start">
            <button onClick={() => setShowForm(false)} className="btn btn-danger"  >
              Remove Edit Form
            </button>
          </div>
        </form> :  
        <div>
          <button onClick={() => setShowForm(true)} className="btn btn-primary"  >
            Edit vehicles
          </button>
        </div>         
      }
    </div>
  )
} 

export default EditVehicleForm