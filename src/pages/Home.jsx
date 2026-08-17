import { useEffect } from 'react'
import ExpensiveCalculation from '../components/ExpensiveCalculation.jsx'

const Home = () => {
  useEffect(() => {
    document.title = 'Side Effects Router'
  }, [])
    
  return (
    <section>
      <h1>
        Home
      </h1>
      <ExpensiveCalculation />
    </section>
  )
}

export default Home;