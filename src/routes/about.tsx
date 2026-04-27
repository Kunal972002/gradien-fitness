import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Shield,
  BarChart3,
  Leaf,
  Users,
  Sparkles,
  Quote,
} from "lucide-react";
import aboutHeroImg from "@/assets/about-community.png";
import { CalButton } from "@/components/CalButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Ethos — ELEVATE Fitness" },
      {
        name: "description",
        content:
          "Fitness engineered for the female executive. Built on science, driven by community. Discover the ELEVATE difference.",
      },
      { property: "og:title", content: "Our Ethos — ELEVATE Fitness" },
      {
        property: "og:description",
        content:
          "We don't do generic. We engineer peak performance for women who lead.",
      },
    ],
  }),
  component: AboutPage,
});

/* ─────────────── Data ─────────────── */

const experts = [
  {
    name: "Dr. Alexandra Mercer",
    role: "Founder & Performance Lead",
    credential: "PhD Exercise Physiology • 15 yrs Corporate Leadership",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Lead Movement Specialist",
    credential: "CSCS • Biomechanics Researcher",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Nutritional Strategy",
    credential: "RDN • Sports Nutrition Fellow",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
];

const pillars = [
  {
    icon: BarChart3,
    title: "Practical & Personalized",
    description:
      "We don't use generic gym templates. Your exercise and diet plans are built around your actual reality — your 10-hour desk job, your stress levels, and your daily schedule. No extreme routines, just smart habits that actually fit into your busy life.",
    span: "md:col-span-2",
  },
  {
    icon: Leaf,
    title: "Total Energy Focus",
    description:
      "We look beyond just weight loss on a scale. By combining the right movement with diet plans that support your monthly cycle, we help you fix your posture, boost your metabolism, and eliminate that afternoon energy crash at the office.",
    span: "md:col-span-1",
  },
  {
    icon: Shield,
    title: "The Women-Only Safe Space",
    description:
      "A 100% private, judgment-free network included with every plan. Whether you are dealing with PCOS, corporate burnout, skin issues, or just need daily motivation, you are supported by a community of working women who truly understand your daily struggles.",
    span: "md:col-span-3",
  },
];

/* ─────────────── Animations ─────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

/* ─────────────── Component ─────────────── */

function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* ═══════════ 1. HERO — THE MANIFESTO ═══════════ */}
        <section className="bg-warmgray">
          <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-28"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-emerald">
                Our Ethos
              </span>

              <h1 className="mt-5 font-heading text-3xl font-black uppercase leading-[1.08] text-foreground sm:text-4xl lg:text-[2.75rem]">
                Fitness engineered
                <br />
                for the female executive.
                <br />
                <span className="text-citrus">
                  Built on science,
                  <br className="hidden sm:block" />
                  driven by community.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Standard gyms weren't designed for you. They ignore 10-hour
                decision-making marathons, chronic cortisol elevation, and the
                hormonal fluctuations that shape your energy across the month. We
                don't.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-2 text-xs font-semibold text-emerald">
                  <Heart className="h-3.5 w-3.5" />
                  Hormone-Aware
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-2 text-xs font-semibold text-emerald">
                  <BarChart3 className="h-3.5 w-3.5" />
                  Data-Driven
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-2 text-xs font-semibold text-emerald">
                  <Users className="h-3.5 w-3.5" />
                  For Founders
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-2 text-xs font-semibold text-emerald">
                  <Users className="h-3.5 w-3.5" />
                  IT Professionals
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-2 text-xs font-semibold text-emerald">
                  <Users className="h-3.5 w-3.5" />
                  Corporate Leaders
                </div>
              </div>

              <CalButton
                calType="consultation"
                variant="citrus"
                size="lg"
                className="mt-10 w-fit group"
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CalButton>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative min-h-[420px] lg:min-h-0"
            >
              <img
                src={aboutHeroImg}
                alt="Three diverse professional women sitting together on studio mats laughing and connecting after a workout session"
                className="h-full w-full object-cover shadow-2xl"
                width={800}
                height={1000}
              />
              {/* Subtle gradient overlay from left for visual blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-warmgray/40 via-transparent to-transparent lg:block hidden" />
            </motion.div>
          </div>
        </section>

        {/* ═══════════ 2. THE ORIGIN STORY ═══════════ */}
        <section className="bg-background py-24 lg:py-32">
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl px-6 text-center"
          >
            <Quote className="mx-auto mb-8 h-10 w-10 text-citrus/40" />

            <h2 className="font-heading text-2xl font-black uppercase text-foreground sm:text-3xl lg:text-4xl leading-tight">
              Why We Built <span className="text-emerald">This Space</span>
            </h2>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                It started with a pattern we kept seeing: brilliant women —
                running companies, managing teams, shaping industries — treating
                their fitness like an afterthought. A random class here. A crash
                diet before a board meeting. Guilt for "falling off the wagon."
              </p>
              <p>
                The problem was never discipline. It was the system. Fitness
                programs are built for people with unlimited time and simple
                hormones. That's not you.
              </p>
              <p className="font-medium text-foreground">
                ELEVATE exists to provide what actually matters:{" "}
                <span className="text-emerald font-bold">
                  energy management
                </span>
                , not calorie counting.{" "}
                <span className="text-emerald font-bold">
                  Hormonal intelligence
                </span>
                , not one-size-fits-all plans. A{" "}
                <span className="text-emerald font-bold">
                  safe space to be vulnerable
                </span>
                , not a stage to perform on.
              </p>
            </div>

            {/* Decorative divider */}
            <div className="mx-auto mt-12 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-border" />
              <Sparkles className="h-4 w-4 text-citrus" />
              <div className="h-px w-12 bg-border" />
            </div>
          </motion.div>
        </section>

        {/* ═══════════ 3. THE EXPERT PANEL ═══════════ */}
        <section className="bg-warmgray py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="text-center"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                The Team
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black uppercase text-foreground sm:text-4xl">
                Meet Our{" "}
                <span className="text-citrus">Performance Experts</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                A multidisciplinary team dedicated to optimizing your physical
                and mental performance — not generic trainers, but specialists
                who understand the executive body.
              </p>
            </motion.div>

            <motion.div
              {...staggerContainer}
              className="mt-16 grid gap-10 md:grid-cols-3"
            >
              {experts.map((expert, i) => (
                <motion.div
                  key={expert.name}
                  {...staggerChild}
                  transition={{ ...staggerChild.transition, delay: i * 0.12 }}
                  className="group text-center"
                >
                  {/* Photo */}
                  <div className="relative mx-auto h-72 w-full max-w-xs overflow-hidden rounded-2xl shadow-lg transition-shadow duration-500 group-hover:shadow-2xl">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="h-full w-full object-cover grayscale transition-all duration-600 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A3626]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
                  </div>

                  {/* Info */}
                  <h3 className="mt-6 font-heading text-lg font-bold text-foreground">
                    {expert.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-citrus">
                    {expert.role}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {expert.credential}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════ 4. CORE PILLARS — BENTO BOX ═══════════ */}
        <section className="bg-background py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="text-center"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                Our Foundation
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black uppercase text-foreground sm:text-4xl">
                Core <span className="text-citrus">Pillars</span>
              </h2>
            </motion.div>

            <motion.div
              {...staggerContainer}
              className="mt-16 grid gap-6 md:grid-cols-3"
            >
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  {...staggerChild}
                  transition={{ ...staggerChild.transition, delay: i * 0.12 }}
                  className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 transition-all duration-400 hover:shadow-xl hover:-translate-y-1 ${pillar.span}`}
                >
                  {/* Subtle corner glow on hover */}
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A3626] shadow-md transition-transform duration-300 group-hover:scale-110">
                      <pillar.icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════ 5. FINAL CONVERSION CTA ═══════════ */}
        <section className="bg-warmgray py-24 lg:py-28">
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl px-6 text-center"
          >
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-emerald">
              Your Next Chapter
            </span>

            <h2 className="mt-5 font-heading text-3xl font-black uppercase leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Stop compromising
              <br />
              your energy.
              <br />
              <span className="text-citrus">
                Step into your peak performance.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Join 500+ executives who have reclaimed their vitality, sharpened
              their focus, and built a body that matches their ambition.
            </p>

            <CalButton
              calType="consultation"
              variant="citrus"
              size="lg"
              className="mt-10 rounded-full px-10 py-6 text-base font-bold group shadow-lg shadow-citrus/20 hover:shadow-xl hover:shadow-citrus/30 transition-all duration-300"
            >
              Apply for Your Free Strategy Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </CalButton>

            <p className="mt-4 text-xs text-muted-foreground">
              Complimentary 30-minute consultation • No obligation
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
