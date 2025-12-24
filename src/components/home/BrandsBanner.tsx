const brands = [
  { name: "Charlotte Tilbury", logo: "CT" },
  { name: "NARS", logo: "NARS" },
  { name: "Olaplex", logo: "OLAPLEX" },
  { name: "Drunk Elephant", logo: "DE" },
  { name: "The Ordinary", logo: "TO" },
  { name: "Sol de Janeiro", logo: "SDJ" },
  { name: "Pat McGrath", logo: "PMG" },
  { name: "Augustinus Bader", logo: "AB" },
];

const BrandsBanner = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <h2 className="font-playfair text-2xl md:text-3xl text-center mb-10">
          Shop by Brand
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <a
              key={index}
              href="#"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background flex items-center justify-center border border-border transition-all group-hover:border-primary group-hover:shadow-md">
                <span className="font-playfair text-sm md:text-base font-semibold">
                  {brand.logo}
                </span>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {brand.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsBanner;