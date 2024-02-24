import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home'

function App() {
  return (
    <div className="App">

      <Header />
      <main id="main">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
