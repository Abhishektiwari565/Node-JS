import API from '../services/api.js'
import {useState} from 'react'

export default function Login(){
    const [formData,setFormData]=useState({email:"",password:""});

    const handleLogin=async()=>{
        if(!formData.email || !formData.password){
            alert("Please fill in all fields");
            return;
        }
        try{
            const res=await API.post("/auth/login",formData);
            alert(res.data.message);
        }catch(error){
            alert(error.message);
        }
    }
    return(
        <div className=" container mt-5 col-md-4">
            <h3>Login Page</h3>
            <input className="form-control mt-2" type="email" placeholder="Email" onchange={(e)=>setFormData({...formData,email:e.target.value})} />
            <input className="form-control mt-2" type="password" placeholder="Password" onchange={(e)=>setFormData({...formData,password:e.target.value})} />
            <button className="btn btn-primary mt-3" onclick={handleLogin}>Login</button>
        </div>
    )
}