import { Route, Routes } from 'react-router-dom';
import './App.css'
import Blogs from './pages/Blogs.jsx';
import Home from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/blogs' Component={Blogs} />
        {/* Single Blog Details */}
        <Route path='/blogs/:id' Component={BlogDetails} />
        <Route path='/contact' Component={Contact} />
        <Route path='/*' Component={NotFound} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;