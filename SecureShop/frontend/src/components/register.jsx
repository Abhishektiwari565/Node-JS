import {API} from '../services/api.js'
import {useState} from 'react'

export default function Register(){
    const [formData,setFormData]=useState({name:"",email:"",password:""});

    const handleRegister=async()=>{
        const res=API.post("/register",formData);
        alert(res.data.message);
    }
}

return(
    <div className='container mt-5 col-md-4'>
        <h3>Register Page</h3>
        <input className='form-control mt-2' type="name" placeholder='Name' onChange={(e)=>setFormData({...formData,name:e.target.value})} />
        <input className='form-control mt-2' type="email" placeholder='Email' onChange={(e)=>setFormData({...formData,email:e.target.value})} />
        <input className='form-control mt-2' type="password" placeholder='Password' onChange={(e)=>setFormData({...formData,password:e.target.value})} />
        <button className='btn btn-primary mt-3' onClick={handleRegister}>Register</button>
    </div>
)