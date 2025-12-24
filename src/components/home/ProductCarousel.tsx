import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  isNew?: boolean;
  isSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Santorini Fragrance Mist 97ml",
    brand: "OUAI",
    price: 26.00,
    image: product1,
    badge: "EXCLUSIVE",
    isNew: true,
  },
  {
    id: 2,
    name: "Freedom Musk Santal 34 EDP 50ml",
    brand: "KAYALI",
    price: 79.00,
    image: product2,
    badge: "FREE GIFT",
  },
  {
    id: 3,
    name: "Mini Eye Sculpt Palette - Cool",
    brand: "NATASHA DENONA",
    price: 24.00,
    image: product3,
    badge: "NEW IN",
    isNew: true,
  },
  {
    id: 4,
    name: "Reedle Shot 100 (50ml)",
    brand: "VT COSMETICS",
    price: 25.00,
    image: product4,
    badge: "NEW IN",
    isNew: true,
  },
  {
    id: 5,
    name: "Molecular Repair Hair Mask 50ml",
    brand: "K18",
    price: 70.00,
    image: product5,
    badge: "NEW IN",
    isNew: true,
  },
  {
    id: 6,
    name: "Rosa Charmosa Dewy Body Cream 75ml",
    brand: "SOL DE JANEIRO",
    price: 21.00,
    image: product6,
    badge: "NEW IN",
    isNew: true,
  },
  {
    id: 7,
    name: "Gilded Nirvana: Mega Eye Shadow Palette",
    brand: "PAT MCGRATH LABS",
    price: 69.00,
    image: product3,
    badge: "BESTSELLER",
  },
  {
    id: 8,
    name: "Cypress and Grapevine Cologne 100ml",
    brand: "JO MALONE LONDON",
    price: 164.00,
    image: product2,
  },
];

const tabs = ["NEW IN", "TRENDING", "SALE"];

const ProductCarousel = () => {
  const [activeTab, setActiveTab] = useState("NEW IN");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Tabs */}
        <div className="flex items-center justify-center gap-8 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium tracking-widest uppercase pb-2 border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background shadow-lg hover:bg-secondary transition-colors hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[200px] md:w-[240px]">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background shadow-lg hover:bg-secondary transition-colors hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;