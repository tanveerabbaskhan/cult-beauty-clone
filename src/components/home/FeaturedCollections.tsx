import collectionGifts from "@/assets/collection-gifts.jpg";
import collectionFragrance from "@/assets/collection-fragrance.jpg";

const collections = [
  {
    title: "The Gift Shop",
    subtitle: "Find the perfect present for everyone on your list",
    image: collectionGifts,
    cta: "SHOP GIFTS",
  },
  {
    title: "Niche Fragrance",
    subtitle: "Discover rare and unique scents from around the world",
    image: collectionFragrance,
    cta: "EXPLORE",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <a
              key={index}
              href="#"
              className="group relative overflow-hidden aspect-[16/9] md:aspect-[4/3]"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-2">
                  {collection.title}
                </h3>
                <p className="text-sm md:text-base opacity-90 mb-4 max-w-sm">
                  {collection.subtitle}
                </p>
                <span className="inline-block border border-white px-6 py-2 text-sm font-medium tracking-wider uppercase transition-colors group-hover:bg-white group-hover:text-accent">
                  {collection.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;