import Brands from "../components/home/Brands.jsx";
import Categories from "../components/home/Categories.jsx";
import Features from "../components/home/Features.jsx";
import HeroSlider from "../components/home/Slider.jsx";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Features />
      <Categories />
      <Brands />
    </>
  ) 
}

export default Home;