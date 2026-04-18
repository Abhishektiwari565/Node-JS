import API from '../services/api.js'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Register(){
    const [formData,setFormData]=useState({name:"",email:"",password:""});
    const navigate=useNavigate();

    const handleRegister=async()=>{
        // Validate form data
        if (!formData.name || !formData.email || !formData.password) {
            alert("Please fill in all fields");
            return;
        }

        if (formData.password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        try {
            const res = await API.post("/auth/register", formData);
            alert(res.data.message);
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
            console.error("Error response:", error.response);
            alert(error.response?.data?.message || "Registration failed");
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
}