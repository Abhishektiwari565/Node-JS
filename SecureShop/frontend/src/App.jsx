
import {Routes,Route, Navigate} from 'react-router-dom'
import Register from './components/register.jsx'
import Login from './components/login.jsx'
import VerifyOtp from './components/verifyOtp.jsx'
import DashBoard from './components/DashBoard.jsx'
import AddProduct from './components/AddProduct.jsx'

function App() {
  
  return (
  <Routes>
    <Route path="/" element={<Navigate to="/register" replace />} />
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/verifyOtp" element={<VerifyOtp/>}/>
    <Route path="/add" element={<AddProduct/>}/>
    
  </Routes>
  )
}

export default App
