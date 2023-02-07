import './App.css';
import NavBar from './components/NavBar/NavBar.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Blog from './pages/Blog.js';
import NoPage from './pages/NoPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar name="Chad" signedIn={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
