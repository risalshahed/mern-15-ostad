// Default Import
import Banner from '../components/Banner'
import Hero from '../components/Hero'

// Named Import (YOU NEVER SHOULD EXPORT OR IMPORT A REACT COMPONENT AS NAMED IMPORT, ALWAYS EXPORT / IMPORT AS DEFAULT)
import { TopProducts } from '../components/TopProducts'

const Home = () => {
  return (
    <>
      {/* {Hero()} */}
      <Hero />
      <Banner />
      <TopProducts />
    </>
  )
}

export default Home