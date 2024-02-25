import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from  './components/Home/Home';
import { Login } from  './components/Login/Login';
import { Register } from  './components/Register/Register';
import { Logout } from  './components/Logout/Logout';
import { Catalog } from  './components/Catalog/Catalog';
import { AddPet } from  './components/AddPet/AddPet';
import { About } from  './components/About/About';
import { Terms } from  './components/Terms/Terms';
import { FAQ } from  './components/FAQ/FAQ';
import { Route, Routes} from 'react-router-dom';


function App() {
  const navigate = useNavigate();


  const [auth, setAuth] = useState({});


  const onLoginSubmit = (data) => {
    const result = authService.login(data);
    setAuth(result)
    navigate('/catalog')
  }
  return (
    <>
    <Header />
    <div className="main-content">
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/login' element={<Login />} />
        <Route path ='/register' element={<Register />} />
        <Route path ='/logout' element={<Logout />} />
        <Route path ='/catalog' element={<Catalog />} />
        <Route path ='/addpet' element={<AddPet />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/terms' element={<Terms />} />
        <Route path ='/faq' element={<FAQ />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
