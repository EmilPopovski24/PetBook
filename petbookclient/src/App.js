import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
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
import { petServiceFactory } from './services/petService';

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [pets, setPets] = useState([]);
  const authService = authServiceFactory(auth.accessToken);
  const petService = petServiceFactory(auth.accessToken);

  useEffect(() => {
    petService.getAll()
      .then(result=> {
        setPets(result)
      })
  }, []);

  const onAddPetSubmit = async(petData) => {
    const newPet = await petService.addPet(petData);
    setPets(state => [...state, newPet]);
    navigate('/catalog')
  }

  const onLoginSubmit = async (data) => {
    const result = await authService.login(data);
    setAuth(result)
    console.log(result)
    navigate('/catalog')
  };

  const onRegisterSubmit = async(values) => {
    const { confirmPassword, ...registerData } = values;
    if(confirmPassword !== registerData.password) {
      alert("Both passwords do not match!")
      return;
    };

    try {
        const result = await authService.register(values);
        setAuth(result);
        navigate('/catalog')
    } catch (error) {
        alert("User with the same details already exists!")
    }
    
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
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
        <Route path ='/catalog' element={<Catalog pets={pets}/>} />
        <Route path ='/addpet' element={<AddPet onAddPetSubmit={onAddPetSubmit}/>} />
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
