import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
// const {id}=useParams()
// console.log(id);
  const [getEmp,setEmp]=useState([])
  const getEmployee=async()=>{
    const res=await axios.get("http://localhost:3001/api/gettask")
    setEmp(res.data)
  }
 useEffect(()=>{
  getEmployee()
 },[])
 console.log(getEmp[0]);


 const deleteEmp = async (id) => {
  const isConfirmed = window.confirm("Are you sure you want to delete this employee?");

  if (isConfirmed) {
    try {
      const res = await axios.delete(`http://localhost:3001/api/deltask/${id}`);
      console.log('Employee deleted:', res.data);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  } else {
    console.log('Deletion cancelled.');
  }
  getEmployee() 
}; 


  return (
    <div>
           <table className='tablemain'>
    <thead>
      <tr>
        <th className='id'>User ID</th>
        <th className='username'>Username</th>
        <th className='action'>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        getEmp.map((data,index)=>
        
          <tr key={index}>
        <td>{data.Empid}</td>
        <td>{data.Name}</td>
        <td>

        <Link className='View' to={`/view/${data._id}`}>View</Link>
        <Link className='Edit' to={`/edit/${data._id}`}>Edit</Link>
        <Link className='delete' to={`#${data._id}`} onClick={() => deleteEmp(data._id)}>Delete</Link>
        </td>
      </tr>
        )
      }
{/* 
      <tr>
        <td>2</td>
        <td>shinfa</td>
        <td>
        <Link className='View' to='/view'>View</Link>
        <Link className='Edit'>Edit</Link>
        <Link className='delete'>Delete</Link>
        </td>
      </tr>

      <tr>
        <td>2</td>
        <td>shinfa</td>
        <td>
        <Link className='View' to='/view'>View</Link>
        <Link className='Edit'>Edit</Link>
        <Link className='delete'>Delete</Link>
        </td>
      </tr>

      <tr>
        <td>2</td>
        <td>shinfa</td>
        <td>
        <Link className='View' to='/view'>View</Link>
        <Link className='Edit'>Edit</Link>
        <Link className='delete'>Delete</Link>
        </td>
      </tr>

      <tr>
        <td>2</td>
        <td>shinfa</td>
        <td>
        <Link className='View' to='/view'>View</Link>
        <Link className='Edit'>Edit</Link>
        <Link className='delete'>Delete</Link>
        </td>
      </tr> */}
    
    </tbody>
  </table>
    </div>
  )
 
}

export default Home
