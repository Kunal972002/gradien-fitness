import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Community", to: "/the-inner-circle" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blogs" },
  { label: "Calculators", to: "/calculators" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="font-heading text-2xl font-black uppercase tracking-tight text-foreground">
          GRADIEN<span className="text-citrus">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              activeOptions={link.to === "/" ? { exact: true } : undefined}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              activeProps={{
                className:
                  "text-sm font-bold text-foreground underline underline-offset-8 decoration-2 decoration-citrus transition-colors duration-200 hover:text-foreground",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="citrus" size="sm" asChild>
            <a href="https://wa.me/919028634445" target="_blank" rel="noopener noreferrer">Join Community</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-[60] text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                activeOptions={link.to === "/" ? { exact: true } : undefined}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground"
                activeProps={{
                  className:
                    "text-base font-bold text-foreground underline underline-offset-8 decoration-2 decoration-citrus",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="citrus" size="default" className="mt-2 w-full" asChild>
              <a href="https://wa.me/919028634445" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>Join Community</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
