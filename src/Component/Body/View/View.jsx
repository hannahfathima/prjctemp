import React, { useEffect, useState } from 'react'
import './View.css'
import { Link, useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import axios from 'axios'
const View = () => {

const {id}=useParams()
console.log(id);
const [getEmp,setEmp]=useState([])
const fullView = async (id) =>{
  try{
    const res = await axios.get(`http://localhost:3001/api/getDetails/${id}`);
    console.log(res);
    setEmp(res.data);
    console.log(res.data);

  }catch (error) {
    console.error('Error fetching employee details:',error);
  }
};
useEffect(()=>{
  fullView(id);
},[id]);
console.log(getEmp);

  return (
    <div>
      <div className="view">
        <div className="main">

          <div className="profile">
            <div className="name">
               <h1>{getEmp.Name}</h1>
              <h4>{getEmp.Designation}</h4>
            </div>
            <div className="photo">
             <div className="img"><img src={getEmp.Photo} alt="" /></div>
            </div>
          </div>
            <table>
             <tr>
              <th>EmpID</th>
             <td>: {getEmp.Empid}</td>
              
             </tr>

             

             <tr>
              <th>Email</th>
             <td>: {getEmp.Email}</td>
              
             </tr> <tr>
              <th>Phone</th>
             <td>: {getEmp.Phone}</td>
              
             </tr>

             <tr>
              <th>Address</th>
             <td>: {getEmp.Address}</td>
              
             </tr>

             <tr>
              <th>Salary</th>
             <td>: {getEmp.Salary}</td>
              
             </tr>

    

            
          </table>
       


         
        </div>
      </div>
    </div>
  )
}

export default View
