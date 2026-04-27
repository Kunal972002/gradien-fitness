import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CalButton } from "@/components/CalButton";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fitness.jpg";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Group of confident corporate women in a high-energy group workout in a modern sunlit studio"
          className="h-full w-full object-cover opacity-40"
          width={1280}
          height={854}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-citrus/20 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-citrus" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-citrus">
              Executive Wellness & Community
            </span>
          </motion.div>

          <h1 className="mt-8 font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Outperform in the
            <br />
            <span className="text-citrus">Boardroom.</span>
            <br />
            Transform in the
            <br />
            <span className="text-emerald-light">Studio.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Data-driven physical conditioning, cycle-synced nutrition, and a private,
            secure network designed specifically for the corporate woman's schedule.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CalButton variant="citrus" size="xl" className="group">
              Book My Free Strategy Call
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CalButton>
            <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white hover:text-foreground">
              <Link to="/calculators">Take the Performance Audit</Link>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {[
              { value: "500+", label: "Women Empowered" },
              { value: "96%", label: "Burnout Reduction" },
              { value: "12", label: "Subject Matter Experts" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="font-heading text-3xl font-black text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
