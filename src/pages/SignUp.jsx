import React from 'react'
import Form from '../component/Form/Form'

const SignUp = () => {
  const inputs=[
    {label:"First Name",
    placeholder:"First Name",
    type:"text",
    name:"first_name"
    },
    {
      label:"Last Name",
        placeholder:"Last Name",
        type:"text ",
        name:"last_name"
        
    },
    {
      label:"User Name",
        placeholder:"User Name",
        type:"text ",
        name:"user_name"
        
    },
    {
      label:"Email Address",
        placeholder:"Email Address",
        type:"text ",
        name:"email"
        
    },
    {
      label:"password",
        placeholder:"password",
        type:"password ",
        name:"password"
        
    },
    {
      label:"confirmation password",
        placeholder:"password",
        type:"password ",
        name:"password_confirmation"
        
    },
    {
      label:"profile image",
        placeholder:"password",
        type:"file",
        name:"profile_image"
        
    }
  ]
  return (
    <div>
       <Form title="Create an Account"
        descrption="create an account to countinu" 
        btn="Sign Up" end="Already have an accouont?Login"
         inputs={inputs }
      url="https://vica.website/api/register"
  />
    </div>
  )
}

export default SignUp
