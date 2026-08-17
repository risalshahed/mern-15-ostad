import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Authentication from './pages/Authentication.jsx';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className='app'>
      <h1>
        Side Effects, Memoize, Router
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/auth">
              Authentication
            </Link>
          </li>
          <li>
            <Link to="/users">
              Users
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/auth' Component={Authentication} />
        <Route path='/users' Component={Users} />
        {/* Not Found Page (MUST be the "Last Route") */}
        <Route path='*' Component={NotFound} />
      </Routes>


      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/users' element={<Users />} />
      </Routes> */}
    </div>
  )
}

export default App;