import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  "Help & Information": [
    "Contact Us",
    "Delivery Information",
    "Returns & Refunds",
    "Track My Order",
    "FAQs",
  ],
  "About Cult Beauty": [
    "About Us",
    "Careers",
    "Press",
    "Affiliate Programme",
    "Student Discount",
  ],
  "Shopping": [
    "Gift Cards",
    "Cult Status Loyalty",
    "Refer a Friend",
    "Klarna",
    "Clearpay",
  ],
  "Legal": [
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
  ],
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-medium text-sm mb-4 uppercase tracking-wide">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 py-8 border-t border-border">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-playfair text-xl font-bold">CULT BEAUTY</p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Cult Beauty. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/124px-PayPal.svg.png"
                alt="PayPal"
                className="h-6 opacity-60"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
                alt="Mastercard"
                className="h-6 opacity-60"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
                alt="Visa"
                className="h-6 opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;