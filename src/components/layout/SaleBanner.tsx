import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const salesMessages = [
  { highlight: "SALE", text: "UP TO 40% OFF", cta: "SHOP NOW" },
  { highlight: "NEW", text: "WINTER BEAUTY PICKS", cta: "DISCOVER" },
];

const SaleBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % salesMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + salesMessages.length) % salesMessages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % salesMessages.length);
  };

  return (
    <div className="announcement-bar relative">
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <div className="flex items-center justify-center gap-4">
        <span className="font-playfair italic text-lg text-primary">
          {salesMessages[currentIndex].highlight}
        </span>
        <span className="tracking-widest">
          {salesMessages[currentIndex].text}
        </span>
        <a href="#" className="font-medium hover:underline">
          {salesMessages[currentIndex].cta}
        </a>
      </div>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
        {salesMessages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SaleBanner;