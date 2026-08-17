import { useEffect } from 'react'
import ExpensiveCalculation from '../components/ExpensiveCalculation.jsx'

const Home = () => {
  useEffect(() => {
    document.title = 'Side Effects Router'
  }, [])
    
  return (
    <div>
      <h1>
        Home
      </h1>
      <ExpensiveCalculation />
    </div>
  )
}

export default Home;