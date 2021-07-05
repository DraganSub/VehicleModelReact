import React from "react"


const NumbersOfData = ({vehiclesPerPage, setVehiclesPerPage}) => {

  return (
    <div style={{paddingTop: "80px"}}>
      <label>Vehicles per page</label>
      <select  className="btn btn-info dropdown-toggle" style={{fontSize: "12px"}} value={vehiclesPerPage} onChange={e => setVehiclesPerPage(e.currentTarget.value)}>
        <option value ="1">1</option>
        <option value ="2">2</option>
        <option value ="3">3</option>
        <option value ="4">4</option>
        <option value ="5">5</option>
        <option value ="6">6</option>
        <option value ="7">7</option>
        <option value ="8">8</option>
        <option value ="9">9</option>
      </select>
    </div>
  )
}



export default NumbersOfData