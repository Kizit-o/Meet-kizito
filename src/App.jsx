import './index.css';  // Global app styles

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Skills.css'; // 👈 Added Skills CSS import
import './styles/Projects.css';
import './styles/Contact.css';
import './styles/Footer.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
