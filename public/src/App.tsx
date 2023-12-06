import './App.css'
import { Routes,Route } from 'react-router-dom'
import FormPage from './Components/FormPage'
import SecondPage from './Components/SecondPage'

function App() {

  return (
    <div className='app'>
    <Routes>
    <Route path="/" element={<FormPage />} />
    <Route path="/secondPage" element={<SecondPage />} />
    </Routes>
    </div>
  )
}

export default App
