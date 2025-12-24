import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const navCategories = [
  "SALE",
  "Christmas",
  "Brands",
  "New & Trending",
  "Skin Care",
  "Make Up",
  "Hair",
  "Fragrance",
  "Body & Wellbeing",
  "SPF & Tan",
  "Minis",
];

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container">
        {/* Main Header Row */}
        <div className="flex items-center justify-between py-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative max-w-xs hidden md:block">
              <input
                type="text"
                placeholder="Search for a product or brand"
                className="w-full px-4 py-2 pr-10 border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold tracking-tight">
              CULT BEAUTY
            </h1>
          </a>

          {/* Actions */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <button
              className="md:hidden p-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <User className="h-5 w-5" />
              <span>Account</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="hidden md:inline">Bag</span>
            </a>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a product or brand"
                className="w-full px-4 py-3 pr-10 border border-border bg-background text-sm focus:outline-none focus:border-primary"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:block border-t border-border">
          <ul className="flex items-center justify-center gap-6 lg:gap-8 py-3">
            {navCategories.map((category) => (
              <li key={category}>
                <a
                  href="#"
                  className={`nav-link ${
                    category === "SALE" ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-border animate-slide-up">
            <ul className="py-4 space-y-4">
              {navCategories.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className={`block py-2 text-sm font-medium ${
                      category === "SALE" ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;