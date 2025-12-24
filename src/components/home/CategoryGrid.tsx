import { Link } from "react-router-dom";
import categoryBrand from "@/assets/category-brand.jpg";
import categoryTrending from "@/assets/category-trending.jpg";
import categoryFragrance from "@/assets/category-fragrance.jpg";
import categorySkincare from "@/assets/category-skincare.jpg";
import categoryMakeup from "@/assets/category-makeup.jpg";
import categoryHaircare from "@/assets/category-haircare.jpg";

const categories = [
  {
    title: "Brand of the Month",
    subtitle: "OUAI",
    image: categoryBrand,
    href: "/category/body-oil-shimmers",
  },
  {
    title: "New & Trending",
    subtitle: "Discover Now",
    image: categoryTrending,
    href: "/category/body-oil-shimmers",
  },
  {
    title: "Fragrance",
    subtitle: "Shop Scents",
    image: categoryFragrance,
    href: "/category/body-oil-shimmers",
  },
  {
    title: "Skin Care",
    subtitle: "Transform Your Routine",
    image: categorySkincare,
    href: "/product/1",
  },
  {
    title: "Body & Wellbeing",
    subtitle: "Body Oil & Shimmers",
    image: categoryMakeup,
    href: "/category/body-oil-shimmers",
  },
  {
    title: "Hair Care",
    subtitle: "Healthy Hair Goals",
    image: categoryHaircare,
    href: "/product/1",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.href}
              className="group relative overflow-hidden aspect-[4/3] md:aspect-[3/4]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-playfair text-sm md:text-base font-semibold mb-1">
                  {category.title}
                </h3>
                <p className="text-xs opacity-80">{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;