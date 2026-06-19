import HeroSlider from "../components/home/HeroSlider";
import NewsletterSection from "../components/home/NewsletterSection";
import ProductsSection from "../components/home/ProductsSection";
import TestimonialSection from "../components/home/TestimonialSection";

function Home() {
  return (
    <div className="home-page">
      <HeroSlider />
      <ProductsSection />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
}

export default Home;
