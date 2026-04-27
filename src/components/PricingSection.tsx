import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Check, Crown, Sparkles, ArrowRight } from "lucide-react";
import { CalButton } from "@/components/CalButton";

const plans = [
  {
    name: "The Movement Foundation",
    tag: "Exercise Focus",
    price: "$149",
    period: "/month",
    description:
      "For women who have their nutrition sorted but need elite physical structure and expert coaching.",
    features: [
      "Expert-led group workout sessions",
      "Personalized posture and form correction",
      "Weekly check-ins and progress tracking",
      "Workouts adjusted to your office schedule",
      "Easy options for both Home and Gym",
    ],
    popular: false,
  },
  {
    name: "The Integrated Performance",
    tag: "Exercise + Diet",
    price: "$299",
    period: "/month",
    description:
      "The complete physical and fueling roadmap for the busy executive who demands peak output.",
    features: [
      "Everything in Movement Foundation",
      "Custom daily diet plan (no starving)",
      "Ready-made grocery shopping lists",
      "Diet adjusted to your monthly cycle",
      "Meals designed to stop 3 PM energy drops",
      "Healthy eating guide for business travel & dining out",
    ],
    popular: true,
  },
  {
    name: "The Elite Holistic Suite",
    tag: "Exercise + Diet + Consultancy",
    price: "$499",
    period: "/month",
    description:
      "High-level physiological optimization for women seeking total mind-body performance.",
    features: [
      "Everything in Integrated Performance",
      "Monthly 1-on-1 health consultancy calls",
      "Support for gut health & slow metabolism",
      "Stress, PCOS, and hormone management",
      "Long-term lifestyle and habit building",
      "VIP access to offline meetups and events",
    ],
    popular: false,
  },
];

const universalBenefits = [
  "Complimentary Strategy Consultation",
  "Daily Habit Tracking",
  "Lifetime Access to the Private Women-Only Inner Circle",
];

export function PricingSection() {
  return (
    <section id="membership" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
            Membership Plans
          </span>
          <h2 className="mt-4 font-heading text-3xl font-black uppercase text-foreground sm:text-5xl">
            Invest in <span className="text-citrus">Yourself</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col h-full overflow-hidden rounded-2xl p-8 transition-shadow duration-300 ${
                plan.popular
                  ? "border-2 border-citrus bg-card shadow-2xl shadow-citrus/10"
                  : "border border-border bg-card shadow-sm hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -right-8 top-6 rotate-45 bg-citrus px-10 py-1 text-xs font-bold uppercase text-citrus-foreground">
                  Popular
                </div>
              )}

              <div className="flex items-center gap-2">
                {plan.popular && <Crown className="h-4 w-4 text-citrus" />}
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald">
                  {plan.tag}
                </span>
              </div>

              <h3 className="mt-3 font-heading text-lg font-bold uppercase text-foreground">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-black text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    {feature}
                  </li>
                ))}
              </ul>

              <CalButton
                variant={plan.popular ? "citrus" : "outline"}
                size="lg"
                className="mt-8 w-full"
              >
                {plan.popular ? "Book My Strategy Call" : "Get Started"}
              </CalButton>
            </motion.div>
          ))}
        </div>

        {/* Universal Benefits Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 overflow-hidden rounded-2xl bg-emerald p-8 sm:p-10"
        >
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Every membership includes:
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-x-2 gap-y-1 sm:justify-start">
                {universalBenefits.map((benefit, i) => (
                  <span key={benefit} className="text-sm text-white/90">
                    {benefit}
                    {i < universalBenefits.length - 1 && (
                      <span className="ml-2 text-white/40">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="shrink-0 border-white/40 bg-white text-emerald font-bold hover:bg-white/90 hover:text-emerald"
            >
              <Link to="/membership-benefits">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
