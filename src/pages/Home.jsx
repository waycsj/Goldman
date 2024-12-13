import Navbar from "../components/navbar/Navbar"
import Slider from "../components/slider/slider";
import Products from "../products/Products";
import Category from "../components/category/Category"


const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Category/>
      <Products />
    </>
  )
}

export default Home;