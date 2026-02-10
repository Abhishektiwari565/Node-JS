
import ChangePassword from './pages/ChangePassword'
import ForgotPassword from './pages/ForgotPassword'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import VerifyOtp from './pages/VerifyOtp'
import VerifyForgotPassword from './pages/VerifyForgotPassword'
import Home from './pages/Home'
import Profile from './pages/Profile'

import { Routes, Route } from 'react-router'
import VerifyLogin from './pages/VerifyLogin'
import AddEmployee from './pages/AddEmployee'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<VerifyLogin><Home/> </VerifyLogin>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/verifyOtp' element={<VerifyOtp />} />
        <Route path='/changeForgotPassword' element={<VerifyForgotPassword />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/home' element={<VerifyLogin><Home/> </VerifyLogin>} />
        <Route path='/profile' element={<VerifyLogin><Profile/> </VerifyLogin>} />
        <Route path='/add-emp' element={<VerifyLogin><AddEmployee/> </VerifyLogin>} />
      </Routes>
    </>
  )
}

export default App
