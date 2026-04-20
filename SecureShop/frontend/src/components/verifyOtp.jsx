import API from '../services/api.js'
import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

export default function VerifyOtp(){
    const [formData,setFormData]=useState({otp:""});
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || localStorage.getItem('otpEmail');

    const handleOtp=async()=>{
        if(!email){
            alert("Email is missing. Please login again.");
            navigate('/login');
            return;
        }

        if(!formData.otp){
            alert("Please enter the OTP");
            return;
        }
        try{
            const res=await API.post("/auth/verifyOtp",{ email, otp: formData.otp });
            alert(res.data.message);
            localStorage.removeItem('otpEmail');
            localStorage.setItem("token", res.data.token);
                    navigate('/add');
        }catch(error){
            alert(error.response?.data?.message || error.message);
        }
    }
    return(
        <div className=" container mt-5 col-md-4">
            <h3>Verify OTP</h3>
            <input className="form-control mt-2" type="email" placeholder="Otp" onChange={(e)=>setFormData({...formData,otp:e.target.value})} />
            <button className="btn btn-primary mt-3" onClick={handleOtp}>Verify Otp</button>
        </div>
    )
}