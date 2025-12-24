import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-beauty-1.jpg";
import heroImage2 from "@/assets/hero-beauty-2.jpg";
import heroImage3 from "@/assets/hero-beauty-3.jpg";

interface HeroSlide {
  id: number;
  tagline: string;
  brand: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  bgColor: string;
  image: string;
  badge?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    tagline: "Ritual Reset",
    brand: "OUAI",
    description: "Take an olfactory trip to the Caribbean with OUAI's limited-edition St. Barts Body Bundle — enjoy 15% off a trio of summery scented shower essentials.",
    ctaPrimary: "SHOP NOW",
    ctaSecondary: "SHOP THE BRAND",
    bgColor: "bg-[#F5EDE6]",
    image: heroImage1,
    badge: "BRAND OF THE MONTH",
  },
  {
    id: 2,
    tagline: "The After Dark Edit",
    brand: "BEAUTY BOX",
    description: "Worth £115 but yours for £42, save over 60% with this curated collection of cool-toned makeup essentials designed to steal the scene.",
    ctaPrimary: "SHOP NOW",
    ctaSecondary: "DISCOVER WHAT'S INSIDE",
    bgColor: "bg-[#1A1A1A]",
    image: heroImage2,
  },
  {
    id: 3,
    tagline: "Holiday Glow",
    brand: "SOL DE JANEIRO",
    description: "Discover the scents of summer with our best-selling Brazilian Bum Bum collection. Limited edition holiday sets now available.",
    ctaPrimary: "SHOP NOW",
    ctaSecondary: "EXPLORE GIFTS",
    bgColor: "bg-[#FFF8F0]",
    image: heroImage3,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];
  const isDark = slide.bgColor.includes("1A1A1A");

  return (
    <section className={`relative overflow-hidden ${slide.bgColor} transition-colors duration-500`}>
      <div className="container">
        <div className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          {/* Content */}
          <div className={`flex flex-col justify-center py-12 md:py-20 pr-8 ${isDark ? "text-white" : "text-foreground"}`}>
            {slide.badge && (
              <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase opacity-70">
                {slide.badge}
              </span>
            )}
            <p className="font-playfair italic text-2xl md:text-3xl mb-2 animate-fade-in">
              {slide.tagline}
            </p>
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              {slide.brand}
            </h2>
            <p className={`text-base md:text-lg max-w-md mb-8 leading-relaxed animate-slide-up ${isDark ? "text-white/80" : "text-muted-foreground"}`} style={{ animationDelay: "0.1s" }}>
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <button className={isDark ? "btn-primary bg-white text-accent hover:bg-white/90" : "btn-primary"}>
                {slide.ctaPrimary}
              </button>
              <button className={isDark ? "btn-outline border-white text-white hover:bg-white hover:text-accent" : "btn-outline"}>
                {slide.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex items-center justify-center">
            <img
              src={slide.image}
              alt={slide.brand}
              className="w-full h-full object-cover object-center animate-fade-in"
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 transition-opacity hover:opacity-70 ${isDark ? "text-white" : "text-foreground"}`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={goToNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 transition-opacity hover:opacity-70 ${isDark ? "text-white" : "text-foreground"}`}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? isDark ? "bg-white w-6" : "bg-foreground w-6"
                : isDark ? "bg-white/40" : "bg-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;