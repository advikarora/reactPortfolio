import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <Router>
        <NavBar />
        <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;