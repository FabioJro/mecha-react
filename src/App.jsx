import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import Cadastro from './Page/Cadastro';
import Login from './Page/Login';
import AboutUs from './Page/AboutUs';
import User from './Page/Users'



export default function App() {
  return (
    <div className ="background">
     <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path ="/AboutUs" element = {<AboutUs />}/>
          <Route path="/Login" element={<Login />} />
          <Route path= "/User" element={<User/>}/>
        </Routes>
      </BrowserRouter>    
    </div>

  )
}


