import { Truck, Smartphone, Mail, Gift } from "lucide-react";

const announcements = [
  { icon: Truck, text: "Free UK shipping over £25" },
  { icon: Smartphone, text: "15% off your app order" },
  { icon: Mail, text: "Sign up for email exclusives" },
  { icon: Gift, text: "Earn Cult Status Points" },
];

const AnnouncementBar = () => {
  return (
    <div className="bg-secondary py-2 border-b border-border">
      <div className="container">
        <div className="flex items-center justify-center gap-8 md:gap-12 overflow-hidden">
          {announcements.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              <item.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;