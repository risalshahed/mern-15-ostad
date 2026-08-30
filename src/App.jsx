import './App.css';
import Home from './pages/Home.jsx';
import AppProvider from './providers/AppProvider.jsx';
import MainLayout from './components/layout/MainLayout.jsx';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/products' Component={Products} />
          <Route path='/products/:id' Component={ProductDetailsPage} />
        </Routes>
      </MainLayout>
    </AppProvider>
  )
}

export default App;