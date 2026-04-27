import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MetabolicAnalyzer } from "@/components/MetabolicAnalyzer";
import { MacroCalculator } from "@/components/MacroCalculator";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Users,
  Trophy,
  Clock,
  BookOpen,
  Brain,
  Moon,
  Zap,
  Leaf,
  HeartPulse,
  CalendarDays,
} from "lucide-react";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
      { title: "Macro Calculator for Corporate Women — BMR & Daily Calorie Planner | ELEVATE" },
      { name: "description", content: "Free macro calculator and BMR tool designed for professional women. Calculate your daily calorie intake for desk jobs, cycle-syncing macro planner, and strategic nutrition for corporate executives." },
      { property: "og:title", content: "Macro Calculator for Corporate Women — ELEVATE Fitness" },
      { property: "og:description", content: "Free macro calculator and BMR estimator built for busy executive women. Optimize nutrition around your desk-heavy schedule, travel days, and menstrual cycle." },
      { name: "keywords", content: "macro calculator for corporate women, cycle-syncing macro planner, daily calorie intake for desk jobs, BMR calculator women, executive nutrition calculator, calorie calculator professional women, macro calculator for weight loss women" },
    ],
  }),
  component: CalculatorsPage,
});

/* ─── Shared animation presets ─── */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

function CalculatorsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* ─── HERO ─── */}
        <section className="bg-warmgray py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl px-6 text-center lg:px-8"
          >
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
              Performance Tools
            </span>
            <h1 className="mt-4 font-heading text-4xl font-black uppercase text-foreground sm:text-5xl">
              Your <span className="text-citrus">Calculators</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Evidence-based tools designed specifically for professional women. Calculate your metabolic baseline, 
              optimize your macros around your corporate schedule, and fuel your performance — not just your workouts.
            </p>
          </motion.div>
        </section>

        {/* ═══════════ CALCULATOR 1: METABOLIC BASELINE ═══════════ */}
        <MetabolicAnalyzer />

        {/* ─── SEO CONTENT: BMR & BMI Deep-Dive ─── */}
        <section className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div {...fadeUp}>
              {/* Section header */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-light">
                  <BookOpen className="h-5 w-5 text-emerald" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Understanding Your <span className="text-emerald">Metabolic Baseline</span>
                </h2>
              </div>

              <div className="prose max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  If you spend 8 to 12 hours at a desk making high-stakes decisions, your body isn't burning energy the same way an athlete's does — but that doesn't mean you're burning <em>less</em>. 
                  Your brain alone consumes roughly 20% of your daily caloric intake. For a corporate woman juggling quarterly targets, team management, and a packed travel calendar, 
                  understanding your <strong>Basal Metabolic Rate (BMR)</strong> is the first step toward strategic nutrition rather than guesswork dieting.
                </p>

                <h3 className="font-heading text-xl font-bold text-foreground !mt-10 !mb-4">
                  What Is BMR and Why Does It Matter for Desk Jobs?
                </h3>
                <p>
                  Your BMR represents the <strong>minimum number of calories your body needs to sustain basic life functions</strong> — breathing, circulation, cell production, and brain activity — 
                  if you were lying still for 24 hours. For the average professional woman between 30 and 50, this figure typically ranges from 1,300 to 1,500 calories per day.
                </p>
                <p>
                  Here's what most generic calorie calculators miss: <strong>cognitive load increases metabolic demand</strong>. A 2019 study published in <em>Psychosomatic Medicine</em> found 
                  that intense mental work elevates cortisol and glucose consumption, meaning your "sedentary" desk day may actually demand more fuel than you think. The issue isn't eating too much — 
                  it's eating the wrong things at the wrong times.
                </p>

                {/* Key insight cards */}
                <div className="!my-10 grid gap-4 sm:grid-cols-3 not-prose">
                  {[
                    { icon: Brain, label: "Cognitive Load", detail: "Your brain uses 320+ calories/day during intense decision-making" },
                    { icon: Zap, label: "Cortisol Effect", detail: "Chronic stress can elevate resting metabolism by 5-10%" },
                    { icon: Moon, label: "Recovery Matters", detail: "Poor sleep reduces BMR by up to 100 kcal/day" },
                  ].map((card) => (
                    <div key={card.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                      <card.icon className="h-5 w-5 text-emerald" />
                      <p className="mt-3 text-sm font-bold text-foreground">{card.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{card.detail}</p>
                    </div>
                  ))}
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground !mt-10 !mb-4">
                  BMI: A Starting Point, Not the Full Picture
                </h3>
                <p>
                  The <strong>Body Mass Index (BMI)</strong> is one of the most widely used — and widely misunderstood — health metrics. As a ratio of weight to height, 
                  BMI provides a quick population-level screening tool, but it doesn't distinguish between muscle mass, bone density, water retention, or body fat distribution.
                </p>
                <p>
                  For executive women who strength train (or plan to start), BMI can be misleading. A woman at 5'6" weighing 155 lbs with significant lean mass may register as "overweight" 
                  while having excellent metabolic health markers. That's why we pair BMI with BMR and, in our coaching program, with waist-to-hip ratio and body fat percentage for a complete picture.
                </p>

                <h3 className="font-heading text-xl font-bold text-foreground !mt-10 !mb-4">
                  How to Use Your BMR for Daily Calorie Intake at a Desk Job
                </h3>
                <p>
                  Once you know your BMR, multiply it by your <strong>activity factor</strong> to estimate your Total Daily Energy Expenditure (TDEE):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Desk-heavy day</strong> (minimal movement, back-to-back meetings): BMR × 1.2</li>
                  <li><strong>Moderate travel day</strong> (airport, walking between venues, some activity): BMR × 1.4</li>
                  <li><strong>Active day</strong> (gym session + normal work routine): BMR × 1.55</li>
                  <li><strong>High-performance day</strong> (intense training + active commute): BMR × 1.7</li>
                </ul>
                <p>
                  For a typical corporate executive with a BMR of 1,400, a desk-heavy day requires approximately <strong>1,680 calories</strong> — and that's before accounting for the metabolic cost 
                  of stress, which can add another 100-200 calories of demand. Under-eating on high-stress days is one of the most common mistakes professional women make, 
                  leading to energy crashes, brain fog, and late-night binge eating.
                </p>

                <h3 className="font-heading text-xl font-bold text-foreground !mt-10 !mb-4">
                  The Cortisol-Calorie Connection
                </h3>
                <p>
                  Corporate women face a unique metabolic challenge: <strong>chronic low-grade cortisol elevation</strong>. Unlike acute stress (which burns fast energy), 
                  the sustained stress of leadership roles keeps cortisol persistently elevated, which signals your body to store visceral fat, increase insulin resistance, 
                  and break down muscle tissue for quick glucose.
                </p>
                <p>
                  The solution isn't eating less — it's eating <em>strategically</em>. Adequate protein at breakfast (30g+) stabilizes blood sugar, 
                  complex carbohydrates at lunch fuel afternoon cognitive performance, and anti-inflammatory foods (omega-3s, turmeric, leafy greens) help modulate the cortisol response. 
                  This is exactly what our macro calculator below helps you plan.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Mid-page inline CTA ─── */}
        <section className="bg-background py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl px-6 lg:px-8"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald to-emerald/80 p-8 sm:p-10">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
              <div className="absolute -right-4 bottom-0 h-20 w-20 rounded-full bg-white/5" />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                      Numbers only tell half the story
                    </h3>
                    <p className="mt-1 max-w-md text-sm text-white/80">
                      Get a personalized plan from our coaches who'll interpret your results and build a program around your lifestyle.
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="xl"
                  asChild
                  className="shrink-0 border-white/40 bg-white text-emerald font-bold hover:bg-white/90 hover:text-emerald"
                >
                  <Link to="/contact">
                    Get Your Free Plan
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ═══════════ CALCULATOR 2: MACRO PLANNER ═══════════ */}
        <MacroCalculator />

        {/* ─── SEO CONTENT: Macro Planning Deep-Dive ─── */}
        <section className="bg-warmgray py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div {...fadeUp}>
              {/* Section header */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-citrus/15">
                  <Leaf className="h-5 w-5 text-citrus-hover" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  The Executive Guide to <span className="text-citrus">Macro Planning</span>
                </h2>
              </div>

              <div className="prose max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  Most macro calculators on the internet are built for bodybuilders and gym enthusiasts. They assume you have unlimited time to meal prep, 
                  you train six days a week, and your primary goal is aesthetics. That's not you. You're a <strong>corporate woman who needs precision nutrition 
                  that fuels decision-making, manages stress hormones, and fits into a schedule that rarely allows a sit-down lunch</strong>.
                </p>
                <p>
                  Our <strong>macro calculator for corporate women</strong> is specifically calibrated to address the three realities of executive life: 
                  sedentary desk hours that still demand high cognitive output, travel schedules that disrupt routine eating, and hormonal fluctuations that 
                  change your body's nutritional needs week by week.
                </p>

                <h3 className="font-heading text-xl font-bold text-foreground !mt-10 !mb-4">
                  What Are Macros and Why Should Professional Women Track Them?
                </h3>
                <p>
                  "Macros" is shorthand for <strong>macronutrients</strong> — the three categories of nutrients your body needs in large amounts: protein, carbohydrates, and fats. 
                  While calories tell you <em>how much</em> to eat, macros tell you <em>what</em> to eat. And for executive women, the "what" matters enormously.
                </p>

                {/* Macro breakdown cards */}
                <div className="!my-10 grid gap-5 sm:grid-cols-3 not-prose">
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="h-2 w-full rounded-full bg-emerald/20 mb-4">
                      <div className="h-2 rounded-full bg-emerald" style={{ width: "30%" }} />
                    </div>
                    <p className="text-sm font-bold text-foreground">Protein — 30%</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Preserves lean muscle, stabilizes blood sugar, and supports immune function. Critical for women over 35 facing age-related sarcopenia.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="h-2 w-full rounded-full bg-citrus/20 mb-4">
                      <div className="h-2 rounded-full bg-citrus" style={{ width: "40%" }} />
                    </div>
                    <p className="text-sm font-bold text-foreground">Carbohydrates — 40%</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Your brain's preferred fuel. Complex carbs at the right times prevent the 3pm crash and sustain focus through back-to-back meetings.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="h-2 w-full rounded-full bg-muted-foreground/20 mb-4">
                      <div className="h-2 rounded-full bg-muted-foreground" style={{ width: "30%" }} />
                    </div>
                    <p className="text-sm font-bold text-foreground">Fats — 30%</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Essential for hormone production (estrogen, progesterone), brain cell membrane integrity, and absorption of vitamins A, D, E, and K.
                    </p>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground !mt-10 !mb-4">
                  Cycle-Syncing Your Macro Plan: The Missing Piece
                </h3>
                <p>
                  Here's what standard macro calculators completely ignore: <strong>your menstrual cycle changes your nutritional needs every week</strong>. 
                  A cycle-syncing macro planner adjusts your intake based on the four phases of your cycle, optimizing energy, reducing cravings, and supporting hormonal balance.
                </p>

                {/* Cycle phases */}
                <div className="!my-10 not-prose">
                  <div className="space-y-4">
                    {[
                      {
                        icon: CalendarDays,
                        phase: "Menstrual Phase (Days 1-5)",
                        focus: "Anti-inflammatory focus",
                        detail: "Iron-rich proteins (red meat, lentils), omega-3 fats, and warming carbohydrates. Slightly increase total calories by 100-150 to support recovery. This is not the week for aggressive calorie cutting.",
                      },
                      {
                        icon: Zap,
                        phase: "Follicular Phase (Days 6-13)",
                        focus: "Performance window",
                        detail: "Estrogen rises, making this your peak training phase. Increase carbohydrates to 45% to fuel higher-intensity workouts. Your body tolerates more volume and recovers faster during this window.",
                      },
                      {
                        icon: HeartPulse,
                        phase: "Ovulatory Phase (Days 14-16)",
                        focus: "Peak energy & strength",
                        detail: "You're at your strongest. Protein synthesis is optimized. Push protein to 35% and time your most challenging training here. This is when PR attempts should happen.",
                      },
                      {
                        icon: Moon,
                        phase: "Luteal Phase (Days 17-28)",
                        focus: "Craving management",
                        detail: "Progesterone rises, increasing resting metabolic rate by 5-10%. Your body genuinely needs 100-300 more calories. Honor this with healthy fats and magnesium-rich foods rather than fighting cravings with willpower.",
                      },
                    ].map((item) => (
                      <div key={item.phase} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-light">
                          <item.icon className="h-5 w-5 text-emerald" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">{item.phase}</p>
                          <p className="text-xs font-semibold text-citrus uppercase tracking-wider mt-0.5">{item.focus}</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground !mt-10 !mb-4">
                  Practical Macro Strategies for Desk-Heavy Days
                </h3>
                <p>
                  When your daily calorie intake for a desk job hovers around 1,600-1,800 calories, every meal decision matters. Here's how our clients — VPs, CFOs, and founders — 
                  structure their macros on typical corporate days:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>7:00 AM — High-Protein Breakfast (30g protein):</strong> Greek yogurt with walnuts and berries, or eggs with avocado on sourdough. 
                    This sets your blood sugar baseline for the entire morning and prevents the 10am energy dip.
                  </li>
                  <li>
                    <strong>12:30 PM — Balanced Lunch (complex carbs + protein):</strong> Salmon bowl with quinoa and roasted vegetables, or a chicken Caesar with 
                    extra protein. The complex carbohydrates here fuel your afternoon cognitive performance.
                  </li>
                  <li>
                    <strong>3:30 PM — Strategic Snack (healthy fats):</strong> A handful of almonds, dark chocolate (85%+), or hummus with vegetables. This prevents 
                    the cortisol-driven sugar craving that leads to vending machine visits.
                  </li>
                  <li>
                    <strong>7:00 PM — Light Dinner (protein + vegetables):</strong> Grilled fish with a large salad and olive oil dressing. 
                    Keeping dinner lighter supports sleep quality and overnight recovery.
                  </li>
                </ul>

                <h3 className="font-heading text-xl font-bold text-foreground !mt-10 !mb-4">
                  Why Generic Macro Calculators Fail Professional Women
                </h3>
                <p>
                  Most free online tools use the same formula for a 25-year-old male bodybuilder and a 42-year-old female CFO. They don't account for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The metabolic impact of chronic stress and elevated cortisol</li>
                  <li>Hormonal fluctuations across the menstrual cycle</li>
                  <li>The cognitive caloric demand of executive-level decision-making</li>
                  <li>Age-related changes in metabolism after 35 (declining muscle mass, shifting hormone profiles)</li>
                  <li>Travel schedules that disrupt meal timing, sleep, and circadian rhythm</li>
                  <li>The social demands of client dinners, networking events, and business lunches</li>
                </ul>
                <p>
                  Our calculator above gives you a <strong>personalized starting point</strong>. But for a truly optimized plan — one that adapts to your cycle, your stress load, and your 
                  quarterly travel calendar — we recommend a <Link to="/contact" className="text-citrus font-semibold hover:underline">free strategy consultation</Link> with our nutrition team. 
                  They'll interpret your numbers in the context of your real life and build a protocol that works when life doesn't go to plan.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Bottom full-width registration CTA ─── */}
        <section className="relative overflow-hidden bg-foreground py-24">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-4xl px-6 text-center lg:px-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-citrus/15 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-citrus animate-pulse" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-citrus">
                Limited Spots Available
              </span>
            </span>

            <h2 className="mt-8 font-heading text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
              Ready to go beyond
              <br />
              <span className="text-citrus">the numbers?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Join 500+ executives who turned their calculator results into real transformation
              with our expert coaches.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="citrus" size="xl" asChild className="group w-full sm:w-auto">
                <Link to="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="w-full border-white/20 text-white hover:bg-white hover:text-foreground sm:w-auto">
                <Link to="/about">Learn About Our Method</Link>
              </Button>
            </div>

            {/* Trust stats */}
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {[
                { icon: Users, value: "500+", label: "Active Members" },
                { icon: Trophy, value: "96%", label: "Goal Achievement" },
                { icon: Clock, value: "45 min", label: "Avg. Session" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto h-5 w-5 text-citrus/60" />
                  <p className="mt-2 font-heading text-2xl font-black text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
