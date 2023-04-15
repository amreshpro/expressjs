import { useState,useEffect } from "react"
import axios from 'axios'


const App = () => {
 const [students, setStudents] = useState([])

 useEffect(() => {
   
 async function getAllStudent(){
try{
  const studentData= await axios("http://localhost:5000/api/student")
  console.log(studentData.data)
  setStudents(studentData.data)

}catch(err){
  console.log("data fetch error: ",err)
}

 }
  
getAllStudent()

 }, [])
 

  return (
    <div>
{

students.map((data)=>{
  return(
    <div key={data._id}>
      <hr />
      <h2>id: {data._id} </h2>
      <h2>Name:{ data.stuname}</h2>
      <h2>Email: {data.email}</h2>
      <hr />
    </div>
  )
})

}

    </div>
  )
}
export default App