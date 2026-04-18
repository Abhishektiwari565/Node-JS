
import {Routes,Route, Navigate} from 'react-router-dom'
import Register from './components/register.jsx'
import Login from './components/login.jsx'

function App() {
  
  return (
  <Routes>
    <Route path="/" element={<Navigate to="/register" replace />} />
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  )
}

export default App
