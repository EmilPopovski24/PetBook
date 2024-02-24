import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from  './components/Home/Home';
import { Login } from  './components/Login/Login';
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
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
