import {useState} from 'react'
import API from '../api'
import axios from 'axios'

export default function Login({setUserId}){
    const [email,setEmail]=useState();

    const handleLogin=async()=>{
        const res=axios.API.post("auth/signin",{email});

        const userId=req.data.userId;
        localStorage.setItem("userId",userId);
        setUserId(userId);
    }
    return(
        <div>
            <h2>Login Page</h2>
            <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}