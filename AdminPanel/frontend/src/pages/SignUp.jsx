import React, { useState } from 'react'
import axios from 'axios'
import {base_uri} from '../utils/global_variables'
export default function SignUp() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSignUp=async()=>{
        const user= {email,password};
       const res= await axios.post(`${base_uri}/auth/signup`,user);
       if(res.status){
        alert(res.data.message);
       }else{
        alert(res.data.message);
       }
    }
  return (
    <div>
        <div>
            <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    </div>
  )
}
