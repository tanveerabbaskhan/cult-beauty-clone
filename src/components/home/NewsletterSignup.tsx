import { useState } from "react";
import { toast } from "sonner";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!", {
        description: "You'll receive our latest beauty news and offers.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-accent text-accent-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">
            Join the Cult
          </h2>
          <p className="text-accent-foreground/80 mb-8">
            Subscribe to receive exclusive offers, early access to new launches, and beauty tips from our experts.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-accent-foreground/30 text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none focus:border-accent-foreground transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent-foreground text-accent font-medium tracking-wider uppercase text-sm transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-accent-foreground/60 mt-4">
            By signing up, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;