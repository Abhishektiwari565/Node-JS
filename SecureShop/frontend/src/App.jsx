
import {BrowseRouter,Routes,Route} from 'react-router-dom'
import {Register} from './components/register.jsx'

function App() {
  
  return (
  <BrowseRouter>
  <Routes>
    <Route path="/register" element={<Register/>}/>
  </Routes>
  </BrowseRouter>
  )
}

export default App
