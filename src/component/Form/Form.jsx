import React, { useState } from 'react'
import './Form.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Form = ({title,descrption,btn,inputs,end,url}) => {
 
// let keys= new FormData()
let keys={}
useEffect(()=>{
  for (let index = 0; index < inputs?.length; index++) {
     keys={...keys,[inputs[index].name]:null}
    // keys.append(inputs[index].name,null)
  }
setdata(keys)

},[])
console.log(keys)
const [data,setdata]=useState(keys)
const handelData=(name,value)=>{
setdata({...data,[name]:value})
}
const navigate=useNavigate()
const send =(event)=>{
  event.preventDefault()
//  fetch(url,{
//   method:"POST",
//   headers:{ 'Content-Type':'application/json'},
//   body:JSON.stringify(data)

//  }).then(res=>res.json())
//    .then(res=>console.log(res))
axios.post(url,data)
.then(res=>{
  console.log(res.data)
  localStorage.setItem("user",JSON.stringify(res.data))
  navigate("/")
})
}
  return (
    <form onSubmit={(event)=>{send(event)}}>
      <h1>{title}</h1>
      <p>{descrption}</p>
      <div className={(inputs.length>2?"row":"")}>
      {
        inputs.map((element,index)=>{ 
          return <div key={index}> 
        
            <label htmlFor={index}>{element.label}</label>
            {(element.type == "file")?<label htmlFor={index}><img src="/assets-dash-next/profile-avatar.png" alt="" /></label>:null   }
            <input onChange={(event)=>{handelData(element.name,(element.type == "file")?event.target.files[0]:event.target.value)}} type={element.type} placeholder={element.placeholder} id={index} style={{display:(element.type=="file")?'none':'block'}} />
            </div>
          
        })
      }
      </div>
      
    <input type="submit" className='form-btn'   value={btn}/>
      <p>{end}</p>
     
    </form>
  )
}

export default Form




