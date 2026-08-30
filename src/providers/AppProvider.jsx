import { useState } from "react"
import { AppContext } from "../context/index.js";

const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const value = {
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand
  }

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;