import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {base_uri} from '../utils/global_variables.js'
import SignIn from '../pages/SignIn.jsx'
import Home from '../pages/Home.jsx'

export default function VerifyLogin({children}) {
    const [isLogin,setIsLogin]=useState(false)
    useEffect(()=>{
        checkLogin();
    },[])
    const checkLogin=async()=>{
    try{
      const res=await axios.get(`${base_uri}/admin/get-current-user`,{withCredentials:true});
      if(res.data.status){
        setIsLogin(true);
      }else{
        setIsLogin(false);
      }
    }catch(err){
     setIsLogin(false);
    }
  }
  return (
    isLogin?children:<SignIn/>
  )
}
