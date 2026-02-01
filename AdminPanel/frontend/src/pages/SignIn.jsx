import React, { useState } from 'react'
import axios from 'axios'
import { base_uri } from '../utils/global_variables'
import { Link, useNavigate } from 'react-router'

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async () => {
        const user = { email, password };
        try {
            const res = await axios.post(`${base_uri}/auth/signin`, user)
            alert(res.data.message);
            if (res.data.status) {
                navigate("/verifyOtp",{state:email});
            }
        } catch (err) {
            alert(err.message);
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
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class Name="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className='mb-5 text-end'>
                    <a href="">Forget Password</a>
                </div>
                <div className='mb-3'>
                    <button onClick={handleSignIn} className='btn btn-primary w-100'>Sign In</button>
                </div>
                <div className='mb-3 text-center'>
                    <Link to="/signup">Don't have an account ? Sign Up</Link>
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
