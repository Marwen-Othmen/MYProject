import React, { useState } from 'react'

const Login = () => {
Const [username,setUsername]=useState("");
Const [password,setPassword]=useState("");
const handleClick = (e)=>{
    e.preventDefault()
    //
}


  return (
    <div>
<input type="text" placeholder= "username" onChange={e=>setUsername(e.target.value)} />
<input type="password" placeholder="password"onChange={e=>setPassword(e.target.value)} />
<button>Login  onClik={handleClick} </button>


    </div>
  )
}

export default Login