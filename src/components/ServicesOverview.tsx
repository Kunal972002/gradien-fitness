import { motion } from "framer-motion";
import { Dumbbell, Leaf, Shield, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    slug: "executive-physical-conditioning",
    icon: Dumbbell,
    title: "Executive Physical Conditioning",
    ctaLabel: "Explore Protocol",
    description:
      "Personalized, 1-on-1 exercise protocols built around your corporate schedule and physical baseline. We focus on strength, mobility, and energy optimization so you can perform efficiently, both in the studio and the boardroom.",
  },
  {
    slug: "strategic-nutrition",
    icon: Leaf,
    title: "Strategic Nutrition & Fuel",
    ctaLabel: "Explore Protocol",
    description:
      "Move beyond generic diet plans. Receive specialized nutrition consultancy tailored to your cycle, stress levels, and daily output requirements. We engineer your macros to sustain high cognitive function and prevent the afternoon crash.",
  },
  {
    slug: "inner-circle-network",
    icon: Shield,
    title: "The Inner Circle Network",
    ctaLabel: "Enter the Network",
    description:
      "Your complimentary access to a secure, private community of high-achieving women. Join expert-led sessions on hormonal health, navigating corporate burnout, and female empowerment in a strictly confidential, supportive space.",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-warmgray py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
            What We Offer
          </span>
          <h2 className="mt-4 font-heading text-3xl font-black uppercase text-foreground sm:text-5xl">
            Built for Your <span className="text-emerald">Lifestyle</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-light">
                <service.icon className="h-7 w-7 text-emerald" />
              </div>

              <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-citrus"
              >
                {service.ctaLabel}
                <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-citrus" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

