import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Utensils, ChevronRight, ChevronLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Goal = "maintain" | "optimize" | "cut";
type Schedule = "desk" | "travel" | "active";

const goals: { value: Goal; label: string; desc: string }[] = [
  { value: "maintain", label: "Maintain", desc: "Sustain current weight and energy" },
  { value: "optimize", label: "Build & Tone", desc: "Gain lean muscle and strength" },
  { value: "cut", label: "Fat Loss", desc: "Strategic fat reduction while preserving muscle" },
];

const schedules: { value: Schedule; label: string; multiplier: number }[] = [
  { value: "desk", label: "Desk-Heavy", multiplier: 1.2 },
  { value: "travel", label: "Frequent Travel", multiplier: 1.4 },
  { value: "active", label: "Active", multiplier: 1.55 },
];

export function MacroCalculator() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState(35);
  const [weight, setWeight] = useState(65);
  const [goal, setGoal] = useState<Goal>("maintain");
  const [schedule, setSchedule] = useState<Schedule>("desk");
  const [showResults, setShowResults] = useState(false);

  const multiplier = schedules.find((s) => s.value === schedule)?.multiplier ?? 1.3;
  const bmr = 10 * weight + 6.25 * 165 - 5 * age - 161;
  const tdee = bmr * multiplier;
  const adjustedCalories = goal === "cut" ? tdee - 300 : goal === "optimize" ? tdee + 200 : tdee;

  const protein = Math.round((adjustedCalories * 0.3) / 4);
  const fats = Math.round((adjustedCalories * 0.3) / 9);
  const carbs = Math.round((adjustedCalories * 0.4) / 4);
  const totalGrams = protein + fats + carbs;

  const steps = [
    <div key="basics" className="space-y-8">
      <h3 className="font-heading text-xl font-bold text-foreground">Your Basics</h3>
      <div>
        <label className="text-sm font-medium text-foreground">Age</label>
        <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))}
          className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-emerald/30" />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground">Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))}
          className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-emerald/30" />
      </div>
    </div>,
    <div key="goal" className="space-y-4">
      <h3 className="font-heading text-xl font-bold text-foreground">Your Goal</h3>
      <div className="space-y-3">
        {goals.map((g) => (
          <button key={g.value} onClick={() => setGoal(g.value)}
            className={`w-full rounded-xl border p-5 text-left transition-all duration-200 ${
              goal === g.value ? "border-emerald bg-emerald-light" : "border-border bg-card hover:border-emerald/30"
            }`}>
            <p className="text-sm font-semibold text-foreground">{g.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{g.desc}</p>
          </button>
        ))}
      </div>
    </div>,
    <div key="schedule" className="space-y-4">
      <h3 className="font-heading text-xl font-bold text-foreground">Activity Level</h3>
      <div className="space-y-3">
        {schedules.map((s) => (
          <button key={s.value} onClick={() => setSchedule(s.value)}
            className={`w-full rounded-xl border p-5 text-left transition-all duration-200 ${
              schedule === s.value ? "border-emerald bg-emerald-light" : "border-border bg-card hover:border-emerald/30"
            }`}>
            <p className="text-sm font-semibold text-foreground">{s.label}</p>
          </button>
        ))}
      </div>
    </div>,
  ];

  return (
    <section className="bg-warmgray py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-citrus/15">
              <Utensils className="h-6 w-6 text-citrus-hover" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-foreground">Daily Fuel Planner</h2>
              <p className="text-sm text-muted-foreground">Calorie & Macro Calculator</p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl bg-card p-8 shadow-lg">
              {!showResults ? (
                <>
                  <div className="mb-8 flex items-center gap-2">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-emerald" : "bg-border"}`} />
                    ))}
                  </div>
                  {steps[step]}
                  <div className="mt-8 flex items-center justify-between">
                    {step > 0 ? (
                      <Button variant="ghost" onClick={() => setStep(step - 1)}><ChevronLeft className="h-4 w-4" /> Back</Button>
                    ) : <div />}
                    {step < 2 ? (
                      <Button variant="emerald" onClick={() => setStep(step + 1)}>Next <ChevronRight className="h-4 w-4" /></Button>
                    ) : (
                      <Button variant="citrus" onClick={() => setShowResults(true)}>Calculate</Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <p className="text-sm font-bold text-emerald">Results Ready!</p>
                  <p className="mt-2 text-sm text-muted-foreground">View your personalized macro breakdown →</p>
                  <Button variant="outline" className="mt-4" onClick={() => { setShowResults(false); setStep(0); }}>
                    Recalculate
                  </Button>
                </div>
              )}
            </article>

            <article className="rounded-2xl bg-card p-8 shadow-lg">
              {showResults ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
                  <div className="rounded-xl bg-foreground p-6 text-center">
                    <p className="text-sm text-white/60">Daily Caloric Target</p>
                    <p className="mt-1 font-heading text-4xl font-black text-white">{Math.round(adjustedCalories)}</p>
                    <p className="mt-1 text-xs text-white/40">kcal / day</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-emerald">Protein</span>
                        <span className="font-bold text-foreground">{protein}g</span>
                      </div>
                      <Progress value={(protein / totalGrams) * 100} className="mt-2 h-3 [&>div]:bg-emerald" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-citrus-hover">Carbs</span>
                        <span className="font-bold text-foreground">{carbs}g</span>
                      </div>
                      <Progress value={(carbs / totalGrams) * 100} className="mt-2 h-3 [&>div]:bg-citrus" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-muted-foreground">Fats</span>
                        <span className="font-bold text-foreground">{fats}g</span>
                      </div>
                      <Progress value={(fats / totalGrams) * 100} className="mt-2 h-3 [&>div]:bg-muted-foreground" />
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground">
                    This macro split is optimized for sustained energy throughout your workday. Adjust protein intake based on training days.
                  </p>
                </motion.div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Utensils className="h-10 w-10 text-border" />
                  <p className="mt-4 font-heading text-lg font-bold text-muted-foreground">Your Results</p>
                  <p className="mt-2 text-sm text-muted-foreground">Complete the form to see your macro breakdown.</p>
                </div>
              )}
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
