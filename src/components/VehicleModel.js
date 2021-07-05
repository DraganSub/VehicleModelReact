import React ,{useState, useEffect, Fragment} from "react"
import firebase from "../common/firebase"
import {v4 as uuidv4} from "uuid"
import Vehicle from "./VehicleMake"
import NumbersOfData from "./NumberOfVehicles"
import SortBy from "./SortBy"
import EditVehicleForm from "./EditVehicle"
import AddVehicleForm from "./AddVehicleForm"



function VehicleModel (){
  //state hooks initializations
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [abrv, setAbrv] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [vehiclesPerPage,setVehiclesPerPage] = useState(6)

  //edit hooks
  const [editName, setEditName] = useState("")
  const [editAbrv, setEditAbrv] = useState("")

  const [showForm, setShowForm] = useState(false)
    
  //sorting hooks
  const [sortByDirection, setSortByDirection] = useState("asc")
  const [sortByCategory, setSortByCategory] = useState("name")

  // Total Vehicles
  const totalVehicles = vehicles.length 
   
  //paginating getting first and last index of items
  const lastVehicleIndex = currentPage * vehiclesPerPage
  const firstVehicleIndex = lastVehicleIndex - vehiclesPerPage
  const currentPost = vehicles.slice(firstVehicleIndex,lastVehicleIndex)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //database collection connection
  const ref = firebase.firestore().collection("vehicles1")      

  useEffect(()=>{
    setLoading(true)
    ref.orderBy(sortByCategory,sortByDirection).where(sortByCategory, "<=", "d").onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) =>{
        items.push(doc.data())
      })
      setVehicles(items)
      setLoading(false)
    })        
  },[sortByCategory,sortByDirection,vehiclesPerPage])

  //add vehicle function
  function addVehicle (newVehicle){
    ref
      .doc(newVehicle.id)
      .set(newVehicle)
      .catch((err)=>{
        console.error(err)
      })
  }   
    
  //submit form function
  const handleSubmit = e => {
    e.preventDefault()
    addVehicle({name,abrv,id: uuidv4()})
    e.target.reset()
  }


  //paging 
  const pageNumbers = []
  const ceil = totalVehicles / vehiclesPerPage
  for (let i = 1; i <= Math.ceil(ceil); i++) {
    pageNumbers.push(i)
  }
    
  //styles for title
  const titleStyle = {
    color: "darkBlue",
    textAlign: "center",
    padding: "40px"
  }

  return(    
    <Fragment>
      <div>
        <h1 style ={titleStyle}className="Title">Vehicle App</h1>
        <AddVehicleForm handleSubmit={handleSubmit} setName={setName} setAbrv={setAbrv}/>
        <EditVehicleForm showForm={showForm} setEditName={setEditName} setEditAbrv={setEditAbrv} setShowForm={setShowForm} />              
        <SortBy sortByCategory={sortByCategory} setSortByCategory={setSortByCategory} sortByDirection={sortByDirection} setSortByDirection={setSortByDirection} />
        <NumbersOfData vehiclesPerPage={vehiclesPerPage} setVehiclesPerPage={setVehiclesPerPage}/>
        <Vehicle vehicles={currentPost} loading ={loading}  abrv = {editAbrv} name={editName}/>        
        <div className="d-flex justify-content-center">
          <ul className='pagination'>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='#' className='page-link'>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="d-flex justify-content-center">Total Vehicles: {totalVehicles}</h1>        
      </div>
    </Fragment>       
  )
}               
export default VehicleModel            
               
  
    
  
  

                   
               
 
    
 
  

               
                
                
            
            
        
          
              
            
       

