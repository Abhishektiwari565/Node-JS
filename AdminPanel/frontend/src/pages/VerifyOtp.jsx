import React, { useState } from 'react'
import OTPInput from 'otp-input-react'
import { useLocation } from 'react-router'
import axios from 'axios'
import {base_uri} from '../utils/global_variables.js'
import {useNavigate} from 'react-router'

export default function VerifyOtp() {
  const navigate=useNavigate();
  const [otp, setOtp] = useState("");
  const { state } = useLocation();

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post(
        `${base_uri}/auth/verifyOtp`,{withCredentials:true},
        {
          email: state,
          otp: Number(otp),
        },
        {
          withCredentials: true,
        }
      );

      // Correct condition
      if (res.data.status) {
        alert(res.data.message);
        navigate("/home")
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };


  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='col-4 shadow p-3 d-flex flex-column justify-content-center align-items-center'>
        <h3 className='my-4'>Verify OTP</h3>
        <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
        <div className='d-flex mt-3 justify-content-end w-100'>
          <a href="">Resend OTP</a>
        </div>
        <button onClick={handleVerifyOtp} className='btn btn-primary mt-4 w-100'>Verify & SignIn</button>
      </div>

    </div>
  )
}
