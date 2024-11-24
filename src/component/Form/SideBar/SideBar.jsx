import React from 'react'
import { json, Navigate, NavLink, useNavigate } from "react-router-dom";
import './Sidebar.css'
import axios from 'axios';
const SideBar = ({logo,menu}) => {
 const  Navigate=useNavigate()
 const logout=()=>{
   axios.post("https://vica.website/api/logout",null,{
     headers:{
       Authorization:`Bearer ${ JSON.parse(localStorage.getItem("user")).token}`
     }
   }).then(res=>{console.log(res)
    Navigate("/auth")
   })
   .catch(error => console.error('Error:', error));
   }
 


  return (
    <div className='Sidebar'>
        <div className='menu'>
        <h1>{logo}</h1>
        {
            menu.map((element,index)=>{
                return <NavLink
                key={index}
                to={element.link}
                className={({ isActive }) =>
                 isActive ? "active" : ""
                }
              >
               {element.name}
              </NavLink>;
            
            })
        }
        </div>
      
        <button onClick={()=>{logout()}}>Logout</button>
     
    </div>
  )
}

export default SideBar
