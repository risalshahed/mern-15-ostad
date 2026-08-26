import './App.css';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import AppProvider from './providers/AppProvider.jsx';
import MainLayout from './components/layout/MainLayout.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('initial');
  
  const value = {
    selectedCategory,
    setSelectedCategory
  }

  return (
    <AppProvider value={value}>
      <MainLayout>
        <Home />
      </MainLayout>
    </AppProvider>
  )
}

export default App;