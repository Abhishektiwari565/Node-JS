import axios from 'axios'
import { useState } from 'react';
function App() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[otp,setOtp]=useState("");

  const handleSignUp=async()=>{
  try{
    const res=await axios.post("http://localhost:2005/signup",{email,password})
    alert(res.data.message);
  }catch(err){
    alert("signup failed");
  }
  }

  const handleSignIn=async()=>{
  try{
    const res=await axios.post("http://localhost:2005/signin",{email,password})
    alert(res.data.message);
  }catch(err){
    alert("signin failed");
  }
  }

  const handleVerify=async()=>{
  try{
    const res=await axios.post("http://localhost:2005/verify",{email,otp},{ withCredentials: true })
    alert(res.data.message);
  }catch(err){
    alert("not verified");
  }
  }

   const handleSignOut=async()=>{
  try{
    const res=await axios.get("http://localhost:2005/signout", { withCredentials: true })
    alert(res.data.message);
  }catch(err){
    alert("not signout");
  }
  }
  return (
    <>
    <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    <input type="text" placeholder="Enter Otp" value={otp} onChange={(e)=>setOtp(e.target.value)} />

    <button onClick={handleSignUp}>SignUp</button>
    <button onClick={handleSignIn}>SignIn</button>
    <button onClick={handleVerify}>verify</button>
    <button onClick={handleSignOut}>SignOut</button>
    </>
  )
}

export default App
