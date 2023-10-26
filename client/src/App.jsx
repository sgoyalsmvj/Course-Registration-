import './App.css'
import LoginPage from './pages/LoginPage'
import { Route, Router, Routes } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element= {<LoginPage/>}/>
    </Routes>
  )
}

export default App;
