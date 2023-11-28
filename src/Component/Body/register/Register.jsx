import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

const Register = () => {
  let Photo="";
  const [val,setval]=useState({
     
    Name:"",
    Email:"",
    Empid:"",
    Phone:"",
    Address:"",
    Salary:"",
    Designation:"",
    
  })

  // Add Data/get data from input
    const getData=(e)=>{
      e.preventDefault();
      // console.log(val);
      setval((pre)=>({...pre,[e.target.name]:e.target.value}))

    

    }
    
      // convert image

      function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
    
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
         }
        })
    }
      // upload image
      const upload=async(e)=>{
        Photo= await convertToBase64(e.target.files[0])
        
      }
     
     // display data
  const RegisterData=async(e)=>{
    e.preventDefault();
    console.log({...val});
    console.log(Photo);

    const res=await axios.post("http://localhost:3001/api/addtask",{...val,Photo:Photo})
  }
 
    
  return (
    <div className="container emp-profile">
      <form method="post" onSubmit={RegisterData}>

     
            
        <div className="row data">
          <div className="col-md-8 details">
          <label htmlFor="name">Name :</label>
            <input type="text" id="name" name="Name" onChange={getData} placeholder="Enter your name" />
            <br></br>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="Email" onChange={getData} placeholder=" email" />
            <br></br>
            <label htmlFor="empId">Emp Id :</label>
            <input type="text" id="empId" name="Empid" onChange={getData} placeholder=" employee ID" />
            <br></br>
            <label htmlFor="phone">Phone :</label>
            <input type="text" id="phone" name="Phone" onChange={getData} placeholder=" phone number" />
                  <br></br>
                  <label htmlFor="address">Address :</label>
            <input type="text" id="address" name="Address" onChange={getData} placeholder=" address" />
            <br />
           
            <label htmlFor="salary">Salary :</label>
            <input type="text" id="salary" name="Salary" onChange={getData} placeholder=" salary" />
                  <br></br>
                  <label htmlFor="designation">Designation :</label>
            <input type="text" id="designation" name="Designation"  onChange={getData} placeholder=" designation" />
            <br></br>
            <div className="profle-img">
      <div className="file ">
               <span style={{color:'white'}}> Change Photo</span>
                <input type="file" name="file" onChange={upload} />
              </div>
             
            </div> 

            
             <div className='Sumbtn'><button >Register</button></div>
          </div>
          <div className="col-md-4 ">
          
            <div className='Regi-text'></div>   </div>
        </div>
      </form>
    </div>
  );
};

export default Register;