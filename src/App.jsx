import './App.css'
import About from './components/About.jsx';
import AvailableProperties from './components/AvailableProperties.jsx';
import Contact from './components/Contact.jsx';
import Features from './components/Features.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <AvailableProperties />
      <About />

      <Contact />


      
    </div>
  )
}

export default App;