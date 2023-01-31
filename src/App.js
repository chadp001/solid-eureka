import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Blog from './pages/Blog.js';

// import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <NavBar />

      <BrowserRouter> 
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and reload...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Documentation
        </a>
      </header>
    </div>
  );
}

export default App;
