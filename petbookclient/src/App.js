import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
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
import { authServiceFactory } from './services/authService';

function App() {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken)

  const onLoginSubmit = async (data) => {
    const result = await authService.login(data);
    setAuth(result)
    console.log(setAuth)
    navigate('/catalog')
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  };

  const contextValues = {
    onLoginSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    username: auth.username,
    isAuthenticated: !!auth.accessToken //truthy - false and vice versa
  };

  return (
    <AuthContext.Provider value={contextValues}>
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
    </AuthContext.Provider>
  );
}

export default App;
