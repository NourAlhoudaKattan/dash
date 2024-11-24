import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ReadProducts = () => {
 const [items,setitems]=useState([])
 const [done,setdone]=useState(false)
  const navigate =useNavigate()
  const goToCreate=()=>{
    navigate("/CreateProducts")
  }

  useEffect(()=>{
    axios.get("https://vica.website/api/items",{   
      headers:{
        Authorization:`Bearer ${ JSON.parse(localStorage.getItem("user")).token}`
      }
    })
    .then (res=>{ setitems(res.data)
      console.log(res)})
  },[done])
 
 

   const ShowProdect=(id)=>{
     navigate(`/show/${id}`)
  }
  const UpdaiteProducts=(id)=>{
    navigate(`UpdaiteProducts/${id}`)
  }
  const del=(id)=>{
    axios.delete(`https://vica.website/api/items/${id}`,{
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
    }}).then(res=>{console.log(res.data)
      setdone(!done)
    })
  }
  return (
    <div className='ReadProducts'>
  <div className='top'>
    <h1>All Products</h1>
    <button onClick={()=>{goToCreate()}}>Create produts</button>
  </div>

 {
    (items)?
    <table>
      <thead>
    <th>id</th>
    <th>name</th>
    <th>imge</th>
    <th>price</th>
    <th>action</th>
      </thead>
     
        {
          items.map((element,index)=>{
            return <tbody key={index}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td> <img src={element.image_url} alt="" /></td>
              <td>{element.price}</td>
              <td><button onClick={()=>{ShowProdect(element.id)}}>show</button> <button onClick={()=>{UpdaiteProducts(element.id)}}>edit</button> <button onClick={()=>{del(element.id)}}>delete</button></td>
            </tbody>
          })
        }
    </table>

    : <h2>theare are no productd ... </h2>
  
  }

    
    </div>
  )
}

export default ReadProducts
