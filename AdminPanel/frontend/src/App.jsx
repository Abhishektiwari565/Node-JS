
// import './App.css'
import ChangePassword from './pages/ChangePassword'
import ForgotPassword from './pages/ForgotPassword'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import VerifyOtp from './pages/VerifyOtp'
import VerifyForgotPassword from './pages/VerifyForgotPassword'
import Home from './pages/Home'
import Profile from './pages/Profile'

import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/verifyOtp' element={<VerifyOtp />} />
        <Route path='/changeForgotPassword' element={<VerifyForgotPassword />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
