import { Heart } from "lucide-react";

interface ProductCardProps {
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

const ProductCard = ({
  name,
  brand,
  price,
  originalPrice,
  image,
  badge,
  isNew,
  isSale,
}: ProductCardProps) => {
  return (
    <article className="product-card group relative">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Wishlist Button */}
        <button
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </button>

        {/* Badge */}
        {badge && (
          <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold uppercase tracking-wide ${
            isSale ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
          }`}>
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {brand}
        </p>
        <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold">£{price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              £{originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Add to Bag Button */}
      <button className="w-full mt-4 py-3 bg-accent text-accent-foreground text-sm font-medium tracking-wide uppercase transition-all hover:bg-primary opacity-0 group-hover:opacity-100">
        Add to Bag
      </button>
    </article>
  );
};

export default ProductCard;