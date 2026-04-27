import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Activity, TrendingUp, Flame } from "lucide-react";

export function MetabolicAnalyzer() {
  const [heightCm, setHeightCm] = useState(165);
  const [weightKg, setWeightKg] = useState(65);
  const [age, setAge] = useState(35);

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-citrus-hover" };
    if (bmi < 25) return { label: "Optimal Range", color: "text-emerald" };
    if (bmi < 30) return { label: "Above Baseline", color: "text-citrus-hover" };
    return { label: "Elevated", color: "text-destructive" };
  };

  const category = getBmiCategory(bmi);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-light">
              <Activity className="h-6 w-6 text-emerald" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-foreground">Metabolic Baseline</h2>
              <p className="text-sm text-muted-foreground">BMI & Basal Metabolic Rate</p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Inputs */}
            <article className="space-y-10 rounded-2xl bg-card p-8 shadow-lg">
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium text-foreground">Height</label>
                  <span className="font-heading text-2xl font-bold text-foreground">{heightCm} cm</span>
                </div>
                <Slider value={[heightCm]} onValueChange={(v) => setHeightCm(v[0])} min={140} max={200} step={1} className="mt-4" />
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium text-foreground">Weight</label>
                  <span className="font-heading text-2xl font-bold text-foreground">{weightKg} kg</span>
                </div>
                <Slider value={[weightKg]} onValueChange={(v) => setWeightKg(v[0])} min={40} max={150} step={0.5} className="mt-4" />
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium text-foreground">Age</label>
                  <span className="font-heading text-2xl font-bold text-foreground">{age}</span>
                </div>
                <Slider value={[age]} onValueChange={(v) => setAge(v[0])} min={20} max={70} step={1} className="mt-4" />
              </div>
            </article>

            {/* Results */}
            <article className="space-y-6 rounded-2xl bg-card p-8 shadow-lg">
              <div className="rounded-xl bg-warmgray p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  Body Composition Index
                </div>
                <p className="mt-2 font-heading text-4xl font-black text-foreground">{bmi.toFixed(1)}</p>
                <p className={`mt-1 text-sm font-bold ${category.color}`}>{category.label}</p>
              </div>
              <div className="rounded-xl bg-warmgray p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Flame className="h-4 w-4" />
                  Basal Metabolic Rate
                </div>
                <p className="mt-2 font-heading text-4xl font-black text-foreground">{Math.round(bmr)}</p>
                <p className="mt-1 text-sm text-muted-foreground">calories / day at rest</p>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Your BMR is the minimum calories your body needs at rest. Use this as the foundation for your nutrition planning.
              </p>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
