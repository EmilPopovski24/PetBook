import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from  './components/Home/Home'
import { Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    <Header />
    <div className="main-content">
        <Home />
    </div>
    <Footer />
    </>
  );
}

export default App;
