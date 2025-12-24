import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Heart, Minus, Plus, Star, Truck, RotateCcw, Shield, ChevronLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SaleBanner from "@/components/layout/SaleBanner";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import productMain from "@/assets/product-detail-1.jpg";
import productAlt1 from "@/assets/product-detail-2.jpg";
import productAlt2 from "@/assets/product-detail-3.jpg";
import productAlt3 from "@/assets/product-detail-4.jpg";
import relatedProduct1 from "@/assets/product-1.jpg";
import relatedProduct2 from "@/assets/product-2.jpg";
import relatedProduct3 from "@/assets/product-3.jpg";
import relatedProduct4 from "@/assets/product-4.jpg";

const productImages = [productMain, productAlt1, productAlt2, productAlt3];

const relatedProducts = [
  { id: 1, name: "Hyaluronic Acid 2% + B5", brand: "The Ordinary", price: 7.90, image: relatedProduct1 },
  { id: 2, name: "Niacinamide 10% + Zinc 1%", brand: "The Ordinary", price: 6.50, image: relatedProduct2 },
  { id: 3, name: "Retinol 0.5% in Squalane", brand: "The Ordinary", price: 6.80, image: relatedProduct3 },
  { id: 4, name: "AHA 30% + BHA 2% Peeling Solution", brand: "The Ordinary", price: 8.30, image: relatedProduct4 },
];

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SaleBanner />
      <Header />

      <main className="container py-6">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/category/skincare" className="text-muted-foreground hover:text-primary transition-colors">Skin Care</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-foreground">The Ordinary Volufiline 92% Serum</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-secondary overflow-hidden group">
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent hover:border-muted-foreground"
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand */}
            <Link to="/brands/the-ordinary" className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
              THE ORDINARY
            </Link>

            {/* Title */}
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
              The Ordinary Volufiline 92% + Pal-Isoleucine 1% Plumping Serum 15ml
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(127 reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <p className="text-2xl font-semibold text-foreground">£19.50</p>
              <p className="text-sm text-muted-foreground">
                Or 3 interest-free payments of £6.50 with <span className="font-medium">Klarna</span>
              </p>
            </div>

            {/* Points */}
            <div className="flex items-center gap-2 p-3 bg-secondary text-sm">
              <Star className="h-4 w-4 text-primary" />
              <span>You'll earn <strong>20 Status Points</strong> with this product</span>
            </div>

            {/* Quantity & Add to Bag */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium tracking-wider uppercase">Quantity:</span>
                <div className="flex items-center border border-border">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 h-12 btn-primary">
                  ADD TO BAG
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 border-border">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">Free UK Shipping over £25</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">Free Returns within 30 days</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">100% Authentic Products</span>
              </div>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="why-cult" className="border-border">
                <AccordionTrigger className="text-sm font-medium tracking-wider uppercase hover:no-underline">
                  Why It's Cult
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  The Ordinary has firmly cemented itself as a leader in science-backed skin care. 
                  Taking the guesswork out of building a regime, it ditches unnecessary filler ingredients 
                  for familiar, hard-working actives that deliver promising results. The Volufiline 92% + 
                  Pal-Isoleucine 1% is a potent serum that enhances fullness and firmness for a youthful, lifted look.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="description" className="border-border">
                <AccordionTrigger className="text-sm font-medium tracking-wider uppercase hover:no-underline">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Target areas of volume loss with The Ordinary's Volufiline 92% + Pal-Isoleucine 1% (15ml). 
                  This potent serum features a high concentration of volufiline, which helps to plump and 
                  volumise targeted areas like the cheeks, lips or jawline. It's also enriched with 
                  pal-isoleucine, which is designed to visibly plump fine lines and wrinkles, boost elasticity, 
                  to deliver a more lifted, youthful appearance over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ingredients" className="border-border">
                <AccordionTrigger className="text-sm font-medium tracking-wider uppercase hover:no-underline">
                  Ingredients
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Hydrogenated Polyisobutene, Caprylyl Glycol, Polyglyceryl-3 Stearate, Palmitoyl Isoleucine, 
                  Anemarrhena Asphodeloides Root Extract, Rhus Succedanea Fruit Wax, Tocopherol.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-to-use" className="border-border">
                <AccordionTrigger className="text-sm font-medium tracking-wider uppercase hover:no-underline">
                  How To Use
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Shake well before use. Apply the product as needed, after your moisturizer, directly to 
                  clean and dry target areas. Store at room temperature. If irritation occurs, rinse off, 
                  cease use, and consult a physician. Use only as directed on unbroken skin. Patch testing 
                  prior to use is advised. Keep out of reach of children.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-playfair text-2xl md:text-3xl text-foreground mb-8">
            Other Customers Bought
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-square bg-secondary mb-3 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
                  {product.brand}
                </p>
                <h3 className="text-sm text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-semibold text-foreground">£{product.price.toFixed(2)}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ADD TO BAG
                </Button>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
