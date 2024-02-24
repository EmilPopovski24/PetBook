import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from  './components/Home/Home';
import { Login } from  './components/Login/Login';
import { Register } from  './components/Register/Register';
import { Logout } from  './components/Logout/Logout';
import { Catalog } from  './components/Catalog/Catalog';
import { AddPet } from  './components/AddPet/AddPet';
import { Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    <Header />
    <div className="main-content">
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/login' element={<Login />} />
        <Route path ='/register' element={<Register />} />
        <Route path ='/logout' element={<Logout />} />
        <Route path ='/addpet' element={<AddPet />} />
        <Route path ='/catalog' element={<Catalog />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
