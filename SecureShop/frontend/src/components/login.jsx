import API from '../services/api.js'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login(){
    const [formData,setFormData]=useState({email:"",password:""});
    const navigate=useNavigate();

    const handleLogin=async()=>{
        if(!formData.email || !formData.password){
            alert("Please fill in all fields");
            return;
        }
        try{
            const res=await API.post("/auth/login",formData);
            alert(res.data.message);
            localStorage.setItem('otpEmail', formData.email);
            navigate("/verifyOtp");
        }catch(error){
            alert(error.response?.data?.message || error.message);
        }
    }
    return(
        <div className=" container mt-5 col-md-4">
            <h3>Login Page</h3>
            <input className="form-control mt-2" type="email" placeholder="Email" onChange={(e)=>setFormData({...formData,email:e.target.value})} />
            <input className="form-control mt-2" type="password" placeholder="Password" onChange={(e)=>setFormData({...formData,password:e.target.value})} />
            <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
             <p className="mt-3">
      Didn't have an account? 
      <a href="/register"> Sign Up</a>
    </p>
        </div>
    )
}