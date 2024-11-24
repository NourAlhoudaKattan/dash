import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ShowProdect = () => {
    const params=useParams()
  const [det,setDet]=useState({})
    useEffect(()=>{
        axios.get(`https://vica.website/api/items/${params.id}`,{
            headers:{
              Authorization:`Bearer ${ JSON.parse(localStorage.getItem("user")).token}`
            }
        }

        ).then(res=>{setDet(res.data)
            console.log(res.data)
        })
    },[])
  return (
    <div>
        <div>{det.name}</div>
        <div>{det.price}</div>
      <img src={det.image_url} alt="" />
  <Link to="/"><button>back</button></Link>
    </div>
  )
}

export default ShowProdect
