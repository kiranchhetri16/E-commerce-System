import { useState } from "react"


export const Login = () => {
    const [formData, setFormData]= useState({
        username:"",
        email:"",
        password:""
    })
  return (
    <div className="h-150 w-100 border border-bg">
<form className="flex flex-col gap-4">

   <div>
    <label >Username</label>
    <input type="text" name="username" className="border border-red-300 p-2 rounded-sm" />
   </div>
   <div className="">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" placeholder="Enter your email" className="border border-red-300 p-2 rounded-sm" />
   </div>
   <div className="">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" placeholder="Enter password" className="border border-red-300 p-2 rounded-sm" />
   </div>
   <button type="submit">Login</button>
</form>

    </div>
  )
}
