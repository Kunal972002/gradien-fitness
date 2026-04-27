import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ServicesOverview } from "@/components/ServicesOverview";
import { HolisticSupport } from "@/components/HolisticSupport";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalButton } from "@/components/CalButton";
import {
  ArrowRight,
  Dumbbell,
  Leaf,
  Shield,
  CheckCircle2,
  Sparkles,
  Users,
  Trophy,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — ELEVATE Fitness" },
      {
        name: "description",
        content:
          "Explore ELEVATE's three-pillar methodology: Executive Physical Conditioning, Strategic Nutrition, and the Inner Circle Network. Built for high-performing women.",
      },
      { property: "og:title", content: "Our Services — ELEVATE Fitness" },
      {
        property: "og:description",
        content:
          "A comprehensive performance framework designed for the biological and lifestyle needs of executive women.",
      },
    ],
  }),
  component: ServicesPage,
});

/* ─── Service pillar data ─── */
const pillars = [
  {
    slug: "executive-physical-conditioning",
    icon: Dumbbell,
    iconBg: "bg-emerald-light",
    iconColor: "text-emerald",
    label: "The Movement Pillar",
    title: "Executive Physical",
    titleAccent: "Conditioning",
    description:
      "Your body is the engine behind every decision you make. We build personalized, 1-on-1 exercise protocols around your corporate schedule and physical baseline.",
    features: [
      "Expert-led group workout sessions",
      "Personalized posture and form correction",
      "Weekly check-ins and progress tracking",
      "Workouts adjusted to your office schedule",
      "Easy options for both Home and Gym",
    ],
    ctaLabel: "Explore Protocol",
  },
  {
    slug: "strategic-nutrition",
    icon: Leaf,
    iconBg: "bg-citrus/15",
    iconColor: "text-citrus-hover",
    label: "The Nutrition Pillar",
    title: "Strategic Nutrition",
    titleAccent: "& Fuel",
    description:
      "Generic diet plans were designed for generic lives. Our nutrition consultancy is tailored to your hormonal cycle, stress load, travel schedule, and cognitive demands.",
    features: [
      "Custom daily diet plan (no starving)",
      "Ready-made grocery shopping lists",
      "Diet adjusted to your monthly cycle",
      "Meals designed to stop 3 PM energy drops",
      "Healthy eating guide for business travel & dining out",
    ],
    ctaLabel: "Explore Protocol",
  },
  {
    slug: "inner-circle-network",
    icon: Shield,
    iconBg: "bg-foreground",
    iconColor: "text-white",
    label: "The Holistic Pillar",
    title: "The Inner Circle",
    titleAccent: "Network",
    description:
      "Fitness doesn't happen in a vacuum. A secure, private community of high-achieving women who understand the intersection of ambition, health, and leadership.",
    features: [
      "Monthly 1-on-1 health consultancy calls",
      "Support for gut health & slow metabolism",
      "Stress, PCOS, and hormone management",
      "Long-term lifestyle and habit building",
      "VIP access to offline meetups and events",
    ],
    ctaLabel: "Enter the Network",
  },
];

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-20">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative overflow-hidden bg-foreground py-24 lg:py-32">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-citrus/20 px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-citrus" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-citrus">
                  Our Three-Pillar Methodology
                </span>
              </motion.div>

              <h1 className="mt-8 font-heading text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                Built for{" "}
                <span className="text-citrus">High Performance</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                We don't just provide workouts. We provide a comprehensive
                performance framework designed for the specific biological and
                lifestyle needs of executive women.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <CalButton calType="consultation" variant="citrus" size="xl" className="group">
                  Book a Free Consultation
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CalButton>
                <Button
                  variant="outline"
                  size="xl"
                  asChild
                  className="border-white/30 text-white hover:bg-white hover:text-foreground"
                >
                  <Link to="/" hash="membership">
                    View Membership Plans
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ THREE PILLARS — Detailed Breakdowns ═══════════ */}
        {pillars.map((pillar, i) => (
          <section
            key={pillar.slug}
            className={`py-20 lg:py-28 ${i % 2 === 0 ? "bg-background" : "bg-warmgray"}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                {/* Text side */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={i % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${pillar.iconBg}`}>
                    <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
                  </div>
                  <span className="mt-5 inline-block font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                    {pillar.label}
                  </span>
                  <h2 className="mt-3 font-heading text-3xl font-black uppercase leading-tight text-foreground sm:text-4xl">
                    {pillar.title}
                    <br />
                    <span className="text-citrus">{pillar.titleAccent}</span>
                  </h2>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {pillar.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm font-medium text-foreground/80"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-citrus" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button variant="emerald" size="lg" asChild className="group">
                      <Link
                        to="/services/$slug"
                        params={{ slug: pillar.slug }}
                      >
                        {pillar.ctaLabel}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <button
                      onClick={() => window.open("https://cal.id/kunal-matale/consultation", "_blank", "noopener,noreferrer")}
                      className="text-sm font-semibold text-foreground/60 transition-colors duration-300 hover:text-citrus"
                    >
                      Book a Free Call →
                    </button>
                  </div>
                </motion.div>

                {/* Visual side — pull quote card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className={i % 2 !== 0 ? "lg:order-1" : ""}
                >
                  <div className="overflow-hidden rounded-3xl bg-foreground p-10 shadow-2xl lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${pillar.iconBg}`}>
                        <pillar.icon className={`h-5 w-5 ${pillar.iconColor}`} />
                      </div>
                      <div>
                        <p className="font-heading text-sm font-bold text-white">
                          {pillar.title} {pillar.titleAccent}
                        </p>
                        <p className="text-xs text-white/50">{pillar.label}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {pillar.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-citrus/70" />
                          <span className="text-sm text-white/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* ═══════════ HOLISTIC SUPPORT (reused from homepage) ═══════════ */}
        <HolisticSupport />

        {/* ═══════════ BOTTOM CTA ═══════════ */}
        <section className="relative overflow-hidden bg-foreground py-24">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-3xl px-6 text-center lg:px-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-citrus/15 px-4 py-2">
              <Sparkles className="h-4 w-4 text-citrus" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-citrus">
                Your Transformation Starts Here
              </span>
            </span>

            <h2 className="mt-8 font-heading text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
              Ready to experience
              <br />
              <span className="text-citrus">all three pillars?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Every membership includes all three pillars working together —
              because real transformation demands a holistic approach.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CalButton calType="consultation" variant="citrus" size="xl" className="group w-full sm:w-auto">
                Book Your Free Consultation
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CalButton>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="w-full border-white/20 text-white hover:bg-white hover:text-foreground sm:w-auto"
              >
                <Link to="/about">Learn About Our Method</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
