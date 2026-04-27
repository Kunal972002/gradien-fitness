import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  LineChart,
  Shield,
  Users,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/membership-benefits")({
  head: () => ({
    meta: [
      { title: "What Every Membership Includes — ELEVATE" },
      {
        name: "description",
        content:
          "Every ELEVATE membership includes a complimentary strategy consultation, daily habit tracking, and lifetime access to our private women-only Inner Circle community.",
      },
      { property: "og:title", content: "What Every Membership Includes — ELEVATE" },
      { property: "og:description", content: "Every ELEVATE membership includes a complimentary strategy consultation, daily habit tracking, and lifetime Inner Circle access." },
    ],
  }),
  component: MembershipBenefitsPage,
});

const benefits = [
  {
    id: "strategy-consultation",
    icon: Calendar,
    iconBg: "bg-citrus/15",
    iconColor: "text-citrus-hover",
    title: "Complimentary Strategy Consultation",
    subtitle: "Your transformation starts with a conversation, not a contract.",
    description:
      "Before you commit to any plan, we invest in understanding you. Your strategy consultation is a dedicated 30-minute session with a senior coach — not a sales pitch, but a genuine deep-dive into your lifestyle, goals, and challenges.",
    details: [
      {
        heading: "What happens in the session",
        items: [
          "A detailed assessment of your current fitness level, energy patterns, and daily schedule",
          "An honest conversation about your goals — whether that's fat loss, strength, stress management, or all three",
          "A preliminary roadmap showing which membership tier aligns with your needs",
          "An opportunity to ask anything — about our methodology, coaches, or community",
        ],
      },
      {
        heading: "Why we do this",
        items: [
          "We don't believe in one-size-fits-all. Your consultation ensures the program we build is tailored from day one",
          "You'll leave with actionable insights you can use immediately — even if you decide not to join",
          "There's zero pressure. This is about fit, not sales",
        ],
      },
    ],
    pullQuote: {
      text: "I went in expecting a sales pitch. Instead, I got the most honest health conversation I've had in years. They actually told me I didn't need the top tier — and that built more trust than any marketing ever could.",
      author: "Priya Nair",
      role: "SVP Engineering, Nexus Technologies",
    },
  },
  {
    id: "habit-tracking",
    icon: LineChart,
    iconBg: "bg-emerald-light",
    iconColor: "text-emerald",
    title: "Daily Habit Tracking",
    subtitle: "What gets measured, gets managed. What gets tracked, gets transformed.",
    description:
      "Your fitness doesn't stop when you leave the studio. Our integrated habit tracking system keeps your entire wellness ecosystem visible, accountable, and optimized — right from your phone.",
    details: [
      {
        heading: "What you can track",
        items: [
          "Workout completion, intensity, and progressive overload metrics",
          "Nutrition adherence — including macro targets, hydration, and meal timing",
          "Sleep quality, duration, and recovery readiness scores",
          "Stress levels, energy patterns, and mood throughout the day",
          "Menstrual cycle phases with auto-adjusted recommendations",
        ],
      },
      {
        heading: "How it helps you",
        items: [
          "Your coach reviews your tracking data before every session — so your program adapts in real-time",
          "Weekly trend reports highlight what's working and what needs attention",
          "Gentle accountability nudges keep you consistent without being intrusive",
          "All data is private, encrypted, and only visible to you and your assigned coach",
        ],
      },
    ],
    pullQuote: {
      text: "I used to think tracking was tedious. The ELEVATE system takes 30 seconds a day and my coach uses it to adjust my program weekly. I've never been this consistent in my life.",
      author: "Rebecca Okonkwo",
      role: "CFO, Halo Health",
    },
  },
  {
    id: "inner-circle",
    icon: Shield,
    iconBg: "bg-foreground",
    iconColor: "text-white",
    title: "Lifetime Access to the Private Women-Only Inner Circle",
    subtitle: "Your membership expires. Your community doesn't.",
    description:
      "The Inner Circle is a secure, curated network of high-achieving women who share your drive, understand your challenges, and support your growth — professionally and personally. Once you're in, you're in for life.",
    details: [
      {
        heading: "What's inside the Inner Circle",
        items: [
          "Monthly expert-led masterclasses on hormonal health, stress resilience, and peak performance",
          "Facilitated roundtables with executive coaches and clinical psychologists",
          "Peer-led empowerment sessions in a strictly confidential environment",
          "Exclusive member events — quarterly retreats, wellness weekends, and networking dinners",
          "A private, moderated discussion forum (not social media) for async support",
        ],
      },
      {
        heading: "Why lifetime access",
        items: [
          "We believe wellness is a lifelong journey, not a subscription service",
          "Former members continue to mentor and inspire current ones — creating a living legacy",
          "Life changes. Careers shift. Your support network shouldn't disappear when your plan does",
          "Every member is vetted. Every conversation is confidential. This is a private club, not a group chat",
        ],
      },
    ],
    pullQuote: {
      text: "I cancelled my membership when I relocated internationally. Two years later, I'm still in the Inner Circle. The women in this group helped me navigate a career pivot, a health scare, and becoming a first-time mother. That's not a perk — that's a lifeline.",
      author: "Diana Marchetti",
      role: "Managing Director, Vantage Partners",
    },
  },
];

function MembershipBenefitsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-emerald py-20 lg:py-28">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                to="/"
                hash="membership"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Membership Plans
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-white">
                  Included with Every Tier
                </span>
              </div>
              <h1 className="mt-6 font-heading text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                What Every
                <br />
                Membership <span className="text-citrus">Includes</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                These aren't add-ons. They're not upsells. They're the foundation of
                every ELEVATE experience — because we believe the basics should be
                exceptional.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Overview Cards */}
        <section className="bg-warmgray py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {benefits.map((b, i) => (
                <motion.a
                  key={b.id}
                  href={`#${b.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-start gap-4 rounded-2xl bg-card p-6 ring-1 ring-border transition-all duration-300 hover:shadow-xl hover:ring-emerald/30"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${b.iconBg}`}
                  >
                    <b.icon className={`h-5 w-5 ${b.iconColor}`} />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground group-hover:text-emerald transition-colors">
                      {b.title.length > 40 ? b.title.slice(0, 40) + "…" : b.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">Jump to details ↓</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        {benefits.map((benefit, i) => (
          <section
            key={benefit.id}
            id={benefit.id}
            className={`py-20 lg:py-28 ${i % 2 === 0 ? "bg-background" : "bg-warmgray"}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={i % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${benefit.iconBg}`}
                  >
                    <benefit.icon className={`h-7 w-7 ${benefit.iconColor}`} />
                  </div>

                  <h2 className="mt-6 font-heading text-3xl font-black uppercase leading-tight text-foreground sm:text-4xl">
                    {benefit.title}
                  </h2>
                  <p className="mt-2 font-heading text-sm font-medium text-emerald">
                    {benefit.subtitle}
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>

                  <div className="mt-8 space-y-8">
                    {benefit.details.map((detail) => (
                      <div key={detail.heading}>
                        <h3 className="font-heading text-base font-bold text-foreground">
                          {detail.heading}
                        </h3>
                        <ul className="mt-4 space-y-3">
                          {detail.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm text-foreground/80"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Quote Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <div className="overflow-hidden rounded-3xl bg-foreground p-10 shadow-2xl lg:p-12">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-10 w-10 text-citrus/40"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                    <p className="mt-6 text-lg font-medium italic leading-relaxed text-white/90">
                      "{benefit.pullQuote.text}"
                    </p>
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <p className="font-heading text-sm font-bold text-white">
                        {benefit.pullQuote.author}
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        {benefit.pullQuote.role}
                      </p>
                    </div>
                  </div>

                  {/* Stats mini-card */}
                  {benefit.id === "inner-circle" && (
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {[
                        { icon: Users, value: "500+", label: "Members" },
                        { icon: Clock, value: "24/7", label: "Access" },
                        { icon: Shield, value: "100%", label: "Confidential" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl bg-card p-4 text-center ring-1 ring-border"
                        >
                          <stat.icon className="mx-auto h-4 w-4 text-emerald/60" />
                          <p className="mt-1 font-heading text-lg font-black text-foreground">
                            {stat.value}
                          </p>
                          <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
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
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
              Ready to experience
              <br />
              <span className="text-citrus">the full package?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Every benefit listed here is yours from day one. No hidden upgrades. No
              premium tiers required. Just a genuine commitment to your success.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="citrus" size="xl" asChild className="group w-full sm:w-auto">
                <Link to="/contact">
                  Book My Strategy Call
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="w-full border-white/20 text-white hover:bg-white hover:text-foreground sm:w-auto"
              >
                <Link to="/" hash="membership">
                  View Membership Plans
                </Link>
              </Button>
            </div>

            <div className="mx-auto mt-12 flex items-center justify-center gap-2 text-white/40">
              <MessageCircle className="h-4 w-4" />
              <p className="text-sm">
                Questions?{" "}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 underline underline-offset-4 transition-colors hover:text-white"
                >
                  WhatsApp us anytime
                </a>
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
