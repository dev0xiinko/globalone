import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedProperties from "@/components/FeaturedProperties";
import Categories from "@/components/Categories";
import RecentProperties from "@/components/RecentProperties";
import CompanyStats from "@/components/CompanyStats";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <BackToTop />
      <SmoothScroll>
        <span id="top" />
        <main>
          <Hero />
          <PropertySearch />
          <About />
          <Services />
          <FeaturedProperties />
          <Categories />
          <RecentProperties />
          <CompanyStats />
          <Testimonial />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
