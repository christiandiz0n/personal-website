import { HashRouter, Routes, Route } from 'react-router-dom';
import InteractiveDots from '../components/dots';
import Navbar from '../components/navbar';
import Frameworks from '../components/frameworks'; 
import Footer from '../components/footer';
import Blog from './blog';
import BlogPost from './blogpost';
import Projects from './projects';
import '../index.css';
import { useState } from 'react';

function App() {
  const [isWaving, setIsWaving] = useState(false);
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <>
            <div>
              <InteractiveDots/>
              <Navbar/>
            </div>
            <main className="main-content">
              <div className="profile-section">
                <h1 className="main-header">
                  Hey, I'm Christian
                  <span 
                    className="waving-hand ml-2 cursor-pointer"
                    onMouseEnter={() => setIsWaving(true)}
                    onMouseLeave={() => setIsWaving(false)}
                    style={{ 
                      animation: isWaving ? 'wave 2s ease-in-out' : 'none',
                    }}
                  >
                    👋
                  </span>
                </h1>
                <p className="main-desc">I'm a full-stack software developer from New Jersey and a computer & cognitive science major at Rutgers University-Honors College.</p>
              </div>
              
              <div className="frameworks-section">
                  <p className="technologies-intro">Some technologies I most commonly work with as a developer:</p>
                  <Frameworks/>
              </div>
            </main>
            <Footer />
          </>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;