import React from "react"

const SortBy = ({sortByCategory,setSortByCategory,sortByDirection,setSortByDirection}) =>{

  return (
    <div style={{float:"right" ,paddingTop:"40px"}}>      
      <div style={{paddingBottom:"10px"}} >
        <select className="btn btn-info dropdown-toggle" style={{fontSize: "12px",textTransform:"uppercase"}}value={sortByCategory} onChange={e => setSortByCategory(e.currentTarget.value)}>
          <option value ="name">Name</option>
          <option value ="abrv">Model</option>
        </select> <label>Sort Category</label>
      </div>
      <div>    
        <select className="btn btn-info dropdown-toggle" value={sortByDirection} style={{fontSize: "12px",textTransform:"uppercase"}} onChange={e => setSortByDirection(e.currentTarget.value)}>
          <option value ="asc">A to Z</option>
          <option value ="desc">Z to A</option>
        </select> <label>Sort Direction</label>
      </div> 
    </div>   
  )
}

export default SortBy