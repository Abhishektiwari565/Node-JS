import React, { useState } from 'react'
import axios from 'axios'
import { base_uri } from '../utils/global_variables'
export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");

    const handleSignIn = async () => {
        const user = { email, password };
        const res = await axios.post(`${base_uri}/auth/signin`, user);
        if (res.status) {
            alert(res.data.message);
        } else {
            alert(res.data.message);
        }
    }

    const handleVerifyOtp = async () => {
        const data = { email, otp };
        const res = await axios.post(`${base_uri}/auth/verifyOtp`, data, { withCredentials: true });
        if (res.status) {
            alert(res.data.message);
        } else {
            alert(res.data.message);
        }
    }
    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className='col-4 shadow p-5 rounded'>
                <div className='mb-3'>
                    <h1 className='text-center'>Sign In</h1>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <div className='mb-5 text-end'>
                    <a href="">Forget Password</a>
                </div>
                <div className='mb-3'>
                    <button className='btn btn-primary w-100'>Sign In</button>
                </div>
                <div className='mb-3 text-center'>
                    <a href="">Don't have an account ? Sign Up</a>
                </div>
            </div>

        </div>
    )
}

//   <div>
//             <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
//         </div>
//         <div>
//             <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
//         </div>
//         <div>
//             <button onClick={handleSignIn}>Sign In</button>
//         </div>
//         <div>
//             <input type="text" placeholder='otp' value={otp} onChange={(e)=>setOtp(e.target.value)} />
//         </div>
//         <div><button onClick={handleVerifyOtp}>Verify</button></div>
