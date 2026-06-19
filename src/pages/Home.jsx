import HeroSlider from "../components/home/HeroSlider";
import ProductsSection from "../components/home/ProductsSection";
import TestimonialSection from "../components/home/TestimonialSection";

function Home() {
  return (
    <div className="home-page">
      <HeroSlider />
      <ProductsSection />
      <TestimonialSection />
    </div>
  );
}

export default Home;
