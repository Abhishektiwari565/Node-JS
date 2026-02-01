import React, { useState } from 'react'
import axios from 'axios'
import {base_uri} from '../utils/global_variables'
import {Link} from 'react-router'


export default function SignUp() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

     const handleSignup = async () => {
        if (password != confirmPassword) {
            return alert("password and confirm password not matched !")
        }
        const user = { email, password };
        try {
            const res = await axios.post(`${base_uri}/auth/signup`, user);
            alert(res.data.message);
        } catch (err) {
            alert(err.message);
        }
    }
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className='col-4 shadow p-5 rounded'>
                <div className='mb-3'>
                    <h1 className='text-center'>Sign Up</h1>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                 <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Confirm Password</label>
                    <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Confirm Password"/>
                </div>
                <div className='mb-5 text-end'>
                    <Link to="/forgotPassword">Resend Password</Link>
                </div>
                <div className='mb-3'>
                    <button onClick={handleSignup} className='btn btn-primary w-100'>Sign Up</button>
                </div>
                <div className='mb-3 text-center'>
                    <Link to="/">already have an account ? Sign In</Link>
                </div>
            </div>

        </div>
  )
}
