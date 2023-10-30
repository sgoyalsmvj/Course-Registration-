import './App.css'
import LoginPage from './pages/LoginPage'
import { Route, Router, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage';
function App() {
  return (
    <Routes>
      <Route path='/' element= {<LoginPage/>}/>
      <Route path='/profile' element= {<ProfilePage/>}/>
    </Routes>
  )
}

export default App;
