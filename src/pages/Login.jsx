import React from 'react'
import Form from '../component/Form/Form'

const Login = () => {
  const inputs=[
    {label:"Email Adress:",
    placeholder:"test@gimal.com",
    type:"text",
    name:"email"
    },
    {
      label:"password:",
        placeholder:"",
        type:"password ",
        name:"password"
        
    }
  ]
  return (
    <div>
     <Form title="Login to Account"
      descrption="plase enter your email and password and countinu" 
      btn="login"
       end="Don't have an account?create account"
        inputs={inputs }
        url="https://vica.website/api/login"
  />
  
    </div>
  )
}

export default Login
