import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Lightbulb,
  Lock,
  HeartHandshake,
  Quote,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { CalButton } from "@/components/CalButton";
import communityImg from "@/assets/community-lounge.png";

export const Route = createFileRoute("/the-inner-circle")({
  head: () => ({
    meta: [
      { title: "The Inner Circle — Confidential Community for Corporate Women | ELEVATE" },
      {
        name: "description",
        content:
          "A 100% private, judgment-free network for female IT professionals, founders, and corporate leaders. Expert masterclasses, confidential forums, and guilt-free accountability — included free with every coaching plan.",
      },
      { property: "og:title", content: "The Inner Circle — ELEVATE Fitness" },
      {
        property: "og:description",
        content:
          "Step into a confidential community of high-achieving corporate women. Discuss hormonal health, burnout recovery, and build sustainable energy — together.",
      },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "women in tech community, corporate women wellness network, PCOS support group professionals, female executive fitness community, burnout recovery women" },
    ],
  }),
  component: InnerCirclePage,
});

/* ─── Shared animation ─── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/* ─── Feature cards data ─── */
const features = [
  {
    icon: Lightbulb,
    title: "Expert-Led Masterclasses",
    description:
      "Monthly live sessions with wellness experts. We cover topics that actually affect your daily life: managing PCOS, cycle-syncing your diet, recovering from corporate burnout, and skincare for high screen-time.",
  },
  {
    icon: Lock,
    title: "The Confidential Forum",
    description:
      "A secure, private network of women who understand your exact lifestyle. Vent about a stressful meeting, ask for a quick 10-minute desk stretch, or share a healthy 15-minute dinner recipe. Zero judgment, total support.",
  },
  {
    icon: HeartHandshake,
    title: "Guilt-Free Accountability",
    description:
      "Missed a workout because a project deployment took all night? You won't find guilt-trips here. Our community is built on empathy. We help you reset, adjust your plan, and get back on track without the toxic fitness mindset.",
  },
];

function InnerCirclePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* ═══════════ 1. HERO — THE INVITATION ═══════════ */}
        <section className="relative overflow-hidden bg-foreground">
          <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-28"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald/15 px-4 py-2"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-light" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald-light">
                  The Inner Circle
                </span>
              </motion.div>

              <h1 className="mt-8 font-heading text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Fitness is physical.
                <br />
                True performance requires
                <br />
                <span className="text-citrus">a safe space.</span>
              </h1>

              <p className="mt-8 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                Step into a 100% confidential, judgment-free network of
                high-achieving corporate women. We discuss the realities of
                10-hour shifts, hormonal health, and building sustainable
                energy — together.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="citrus" size="xl" asChild className="group">
                  <a href="https://wa.me/919028634445" target="_blank" rel="noopener noreferrer">
                    Join Our Community for Free
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative min-h-[420px] lg:min-h-0"
            >
              <img
                src={communityImg}
                alt="Four diverse professional women in athleisure sitting together in a cozy wellness lounge, laughing over coffee and green smoothies"
                className="h-full w-full object-cover"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-transparent to-transparent lg:block hidden" />
            </motion.div>
          </div>
        </section>

        {/* ═══════════ 2. WHY YOU NEED THIS ═══════════ */}
        <section className="bg-slate-50 py-24 lg:py-32">
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl px-6 text-center lg:px-8"
          >
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
              Why This Exists
            </span>
            <h2 className="mt-6 font-heading text-3xl font-black uppercase leading-tight text-foreground sm:text-4xl">
              You don't need another
              <br />
              <span className="text-citrus">generic WhatsApp group.</span>
            </h2>
            <div className="mx-auto mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                The corporate world demands constant output, and standard
                fitness programs just add to your mental load. We realized our
                clients didn't just need workout plans — they needed a place to
                decompress.
              </p>
              <p>
                <strong className="text-foreground">
                  The Inner Circle is your daily mental detox.
                </strong>{" "}
                It's where female IT professionals and executives come to drop
                the corporate mask, share their struggles, and celebrate their
                actual wins.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ═══════════ 3. WHAT HAPPENS INSIDE ═══════════ */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                What Happens Inside
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black uppercase text-foreground sm:text-5xl">
                More than a <span className="text-citrus">group chat</span>
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-shadow duration-300 hover:shadow-xl hover:ring-emerald/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-light">
                    <feature.icon className="h-7 w-7 text-emerald" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 4. SOCIAL PROOF — THE VIBE CHECK ═══════════ */}
        <section className="bg-warmgray py-24 lg:py-32">
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-4xl px-6 text-center lg:px-8"
          >
            <Quote className="mx-auto mb-8 h-12 w-12 text-citrus/30" />

            <blockquote className="font-heading text-xl font-bold leading-relaxed text-foreground sm:text-2xl lg:text-3xl lg:leading-snug">
              "I originally joined for the exercise plan to fix my back pain
              from coding all day. But{" "}
              <span className="text-emerald">The Inner Circle</span> is why I
              stay. Having a safe space to discuss work stress and hormonal
              imbalances with other women in tech is priceless. It's my{" "}
              <span className="text-citrus">daily mental detox.</span>"
            </blockquote>

            <div className="mt-10 flex flex-col items-center gap-1">
              <div className="h-12 w-12 rounded-full bg-emerald-light flex items-center justify-center font-heading font-bold text-emerald text-lg">
                A
              </div>
              <p className="mt-3 font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                Ananya
              </p>
              <p className="text-sm text-muted-foreground">
                Senior Software Engineer & Active Member
              </p>
            </div>
          </motion.div>
        </section>

        {/* ═══════════ 5. CONVERSION — HOW TO JOIN ═══════════ */}
        <section className="relative overflow-hidden bg-emerald py-24 lg:py-32">
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <motion.div
            {...fadeUp}
            className="relative mx-auto max-w-3xl px-6 text-center lg:px-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-white">
                Included Free With Every Plan
              </span>
            </span>

            <h2 className="mt-8 font-heading text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
              Access is complimentary.
              <br />
              <span className="text-citrus">The value is priceless.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              The Inner Circle is not something you can buy separately. We
              believe holistic support should be the foundation of your
              wellness, not an add-on. Lifetime access is included for free
              with every single coaching protocol.
            </p>

            <div className="mt-10">
              <Button
                variant="citrus"
                size="xl"
                asChild
                className="group shadow-2xl shadow-black/20"
              >
                <a href="https://wa.me/919028634445" target="_blank" rel="noopener noreferrer">
                  Join Our Community for Free
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/50">
              No upsells. No hidden tiers. One community for all members.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
