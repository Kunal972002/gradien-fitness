import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { CalButton } from "@/components/CalButton";

const pillars = [
  {
    title: "Hormonal Harmony & Cycle Syncing",
    description:
      "Addressing the hidden drivers of energy. We provide strategies to manage PCOS, PMS, and cortisol spikes — ensuring your fitness works with your biology, not against it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20" />
        <path d="M12 2a14.5 14.5 0 0 1 0 20" />
        <path d="M2 12h20" />
      </svg>
    ),
    span: "sm:col-span-1",
  },
  {
    title: "Derma-Wellness & Skin Nutrition",
    description:
      "Radiance starts from within. We offer guidance on 'Skin Food' and lifestyle habits that combat the effects of corporate stress and blue light on your complexion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
        <path d="M22 2 13 11" />
        <path d="m16 2 6 0 0 6" />
      </svg>
    ),
    span: "sm:col-span-1",
  },
  {
    title: "Metabolic & Gut Health",
    description:
      "Optimizing your internal engine. Dedicated support for digestive health, bloating management, and metabolic flexibility to keep you feeling light and focused through back-to-back meetings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald">
        <path d="M2 12h4l3-9 6 18 3-9h4" />
      </svg>
    ),
    span: "sm:col-span-1",
  },
  {
    title: "The \"Life-Design\" Safe Space",
    description:
      "A confidential forum to discuss real-world problems — from corporate burnout and work-life boundaries to navigating reproductive health transitions. You are supported by women who understand the load you carry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald">
        <path d="M12 22s8-4.5 8-10V5l-8-3-8 3v7c0 5.5 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    span: "sm:col-span-1",
    badge: true,
  },
];

export function HolisticSupport() {
  return (
    <section className="bg-warmgray py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
            Beyond the Studio
          </span>
          <h2 className="mt-4 font-heading text-3xl font-black uppercase text-foreground sm:text-5xl">
            360° Life & <span className="text-emerald">Wellness</span> Support
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Physical strength is just the beginning. We provide the ecosystem to manage the complexities of being a high-achieving woman.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border transition-all duration-300 hover:shadow-xl hover:ring-emerald/30 ${pillar.span}`}
            >
              {/* Icon + Badge row */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-light">
                  {pillar.icon}
                </div>
                {pillar.badge && (
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald/10 px-3 py-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald">
                      Confidential & Secure
                    </span>
                  </div>
                )}
              </div>

              <h3 className="mt-5 font-heading text-base font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>

              {/* Conversion Link */}
              <a
                href="https://cal.id/kunal-matale/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-citrus"
              >
                Discuss this in your free consultation
                <ArrowRight className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-citrus" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-muted-foreground">
            All holistic support is included with every membership tier.
          </p>
          <CalButton
            variant="default"
            size="default"
            className="mt-3 font-heading text-sm font-bold uppercase tracking-wider"
          >
            Book My Strategy Call
            <ArrowRight className="h-4 w-4" />
          </CalButton>
        </motion.div>
      </div>
    </section>
  );
}
