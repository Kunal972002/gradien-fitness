import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Youtube, Twitter } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-heading text-2xl font-black uppercase">
              GRADIEN<span className="text-citrus">.</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Premium fitness for women who lead. Strength, balance, performance.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-citrus" aria-label="Follow GRADIEN on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-citrus" aria-label="Subscribe to GRADIEN on YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-citrus" aria-label="Follow GRADIEN on Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white/40">Navigate</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Community", to: "/the-inner-circle" },
                { label: "About", to: "/about" },
                { label: "Blog", to: "/blogs" },
                { label: "Calculators", to: "/calculators" },
                { label: "Membership", to: "/membership-benefits" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white/40">Legal</h4>
            <ul className="mt-4 space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/60 transition-colors hover:text-white cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white/40">
              Weekly Fitness Brief
            </h4>
            <p className="mt-4 text-sm text-white/60">
              Workouts, nutrition tips, and mindset strategies for busy professionals.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-citrus/50"
              />
              <Button variant="citrus" size="icon">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/40">
            © {new Date().getFullYear()} GRADIEN. All rights reserved. Built for women who lead.
          </p>
        </div>
      </div>
    </footer>
  );
}
