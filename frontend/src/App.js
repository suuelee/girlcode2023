import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
