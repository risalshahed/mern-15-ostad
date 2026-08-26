import { useState } from "react"
import { AppContext } from "../context/index.js";

const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('initial');

  const value = {
    selectedCategory,
    setSelectedCategory
  }

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;