import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home'
import Cadastro from './Page/Cadastro'
import Login from './Page/Login'



export default function App() {
  return (
    <div className ="background">
     <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    
    </div>

  )
}


