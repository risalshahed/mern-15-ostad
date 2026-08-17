import { Route, Routes } from 'react-router-dom';
import './App.css'
import Authentication from './pages/Authentication.jsx';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
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
      </main>
    </>
  )
}

export default App;