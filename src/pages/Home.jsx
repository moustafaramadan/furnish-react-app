import HeroSlider from "../components/home/HeroSlider";
import ProductsSection from "../components/home/ProductsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import NewsletterSection from "../components/home/NewsletterSection";

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
