import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SaleBanner from "@/components/layout/SaleBanner";
import Header from "@/components/layout/Header";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductCarousel from "@/components/home/ProductCarousel";
import BrandsBanner from "@/components/home/BrandsBanner";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Announcement Bar */}
      <AnnouncementBar />
      
      {/* Sale Banner */}
      <SaleBanner />
      
      {/* Header with Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Carousel */}
        <HeroCarousel />
        
        {/* Category Quick Links */}
        <CategoryGrid />
        
        {/* Product Carousel */}
        <ProductCarousel />
        
        {/* Featured Collections */}
        <FeaturedCollections />
        
        {/* Brand Logos */}
        <BrandsBanner />
        
        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;