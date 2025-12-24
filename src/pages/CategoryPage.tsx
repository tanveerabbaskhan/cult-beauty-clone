import { useState } from "react";
import { ChevronDown, ChevronRight, SlidersHorizontal } from "lucide-react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SaleBanner from "@/components/layout/SaleBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import heroImage1 from "@/assets/category-hero-1.jpg";
import heroImage2 from "@/assets/category-hero-2.jpg";
import heroImage3 from "@/assets/category-hero-3.jpg";

const products = [
  {
    id: 1,
    name: "Huile Prodigieuse Shimmering Multi-Purpose Dry Oil 50ml",
    brand: "NUXE",
    price: 23.00,
    image: product1,
  },
  {
    id: 2,
    name: "GlowMotions Copacabana Bronze Glow Oil 75ml",
    brand: "Sol de Janeiro",
    price: 35.00,
    image: product2,
  },
  {
    id: 3,
    name: "Bum Bum Body Firmeza Oil 100ml",
    brand: "Sol de Janeiro",
    price: 52.00,
    image: product3,
    badge: "Cult Conscious",
  },
  {
    id: 4,
    name: "Major Glow Luminous Bronzing Body Oil 95ml",
    brand: "Patrick Ta",
    price: 42.00,
    image: product4,
  },
  {
    id: 5,
    name: "Body Lava Body Luminizer 90ml",
    brand: "Fenty Beauty",
    price: 46.00,
    image: product5,
  },
  {
    id: 6,
    name: "Major Glow High Shine Body Oil 95ml",
    brand: "Patrick Ta",
    price: 42.00,
    image: product6,
  },
  {
    id: 7,
    name: "Luxury Body Oil with Argan 100ml",
    brand: "Moroccanoil",
    price: 38.00,
    originalPrice: 45.00,
    image: product1,
    badge: "Sale",
    isSale: true,
  },
  {
    id: 8,
    name: "Rose Gold Shimmer Body Oil 75ml",
    brand: "Charlotte Tilbury",
    price: 55.00,
    image: product2,
    badge: "New",
    isNew: true,
  },
  {
    id: 9,
    name: "Coconut Body Glow Oil 100ml",
    brand: "Kopari",
    price: 32.00,
    image: product3,
  },
  {
    id: 10,
    name: "Bronze Goddess Shimmering Body Oil 100ml",
    brand: "Estée Lauder",
    price: 48.00,
    image: product4,
  },
  {
    id: 11,
    name: "Honey Infused Body Oil 100ml",
    brand: "Gisou",
    price: 65.00,
    image: product5,
  },
  {
    id: 12,
    name: "Brazilian Bum Bum Cream Oil 240ml",
    brand: "Sol de Janeiro",
    price: 44.00,
    image: product6,
  },
];

const filterCategories = [
  {
    name: "Bath & Body Category",
    options: ["Bath & Body (72)", "Bath & Shower (3)", "Self Tanning (14)", "Sets & Kits (9)", "Skin Health (9)", "Sun Care (6)"],
  },
  {
    name: "Body Skin Health",
    options: ["Body Butter (3)", "Body Cream (3)", "Body Gel (2)", "Body Lotion (2)", "Body Oil (63)", "Body Shimmer (3)"],
  },
  {
    name: "Range",
    options: ["Almond (1)", "Bum Bum (1)", "Huile Prodigieuse (3)", "Original (2)", "Positivity (3)"],
  },
  {
    name: "Savings",
    options: ["Up to 25% (2)", "25% - 50% (3)"],
  },
];

const sortOptions = ["Popularity", "Price: Low to High", "Price: High to Low", "A - Z", "Newest Arrivals"];

const CategoryPage = () => {
  const [sortBy, setSortBy] = useState("Popularity");
  const [showReadMore, setShowReadMore] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SaleBanner />
      <Header />

      <main className="pb-16">
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <a href="/" className="hover:text-foreground transition-colors">
                Home
              </a>
            </li>
            <ChevronRight className="h-3 w-3" />
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Body Care & Wellness
              </a>
            </li>
            <ChevronRight className="h-3 w-3" />
            <li className="text-foreground font-medium">Body Oil & Shimmers</li>
          </ol>
        </nav>

        {/* Category Hero Banners */}
        <div className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1 aspect-square md:aspect-auto md:h-64 overflow-hidden relative group">
              <img 
                src={heroImage1} 
                alt="Body Oils" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                <div className="text-center text-background">
                  <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Discover</p>
                  <h3 className="text-xl font-serif">Body Oils</h3>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 aspect-square md:aspect-auto md:h-64 overflow-hidden relative group">
              <img 
                src={heroImage2} 
                alt="Shimmers" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                <div className="text-center text-background">
                  <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Glow</p>
                  <h3 className="text-xl font-serif">Shimmers</h3>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 aspect-square md:aspect-auto md:h-64 overflow-hidden relative group">
              <img 
                src={heroImage3} 
                alt="Nourish" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                <div className="text-center text-background">
                  <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Hydrate</p>
                  <h3 className="text-xl font-serif">Nourish</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item Count */}
        <div className="container mx-auto px-4 mb-4">
          <p className="text-right text-sm text-muted-foreground">{products.length} Items</p>
        </div>

        {/* Category Title & Description */}
        <section className="container mx-auto px-4 text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
            BODY OIL & SHIMMERS
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              Lather your limbs in head-to-toe hydration with our curated collection of body oils and shimmers. Working hard to deliver your daily dose of dew, these body oils and shimmers are flooded with nourishing ingredients
              {showReadMore && " (we're talking argan, coconut and jojoba oil) to lock in moisture and boost a mirror-like shine. Whether you're prepping for a night out or simply want that lit-from-within glow for everyday, our selection of luxurious oils and luminizing formulas will leave your skin silky-smooth and radiant."}
            </p>
            <button
              onClick={() => setShowReadMore(!showReadMore)}
              className="text-foreground font-medium mt-2 hover:underline"
            >
              {showReadMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Guide Links */}
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" className="uppercase text-xs tracking-wider">
              Body Shimmers Guide
            </Button>
            <Button variant="outline" className="uppercase text-xs tracking-wider">
              Body Oils Guide
            </Button>
          </div>
        </section>

        {/* Filters & Sort */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-2">
              {filterCategories.map((filter) => (
                <DropdownMenu key={filter.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-sm font-normal h-auto py-2 px-4 border border-border">
                      {filter.name}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {filter.options.map((option) => (
                      <DropdownMenuItem key={option} className="flex items-center gap-2">
                        <Checkbox id={option} />
                        <label htmlFor={option} className="text-sm cursor-pointer flex-1">
                          {option}
                        </label>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
              
              <Button variant="ghost" className="text-sm font-normal h-auto py-2 px-4 border border-border">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                More Filters +
              </Button>
            </div>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-normal h-auto py-2 px-4">
                  Sort
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={sortBy === option ? "bg-secondary" : ""}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Product Grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="uppercase tracking-wider">
              Load More Products
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
