import { motion } from "framer-motion";
import { CalButton } from "@/components/CalButton";
import { ArrowRight, Clock, Shield, Calendar } from "lucide-react";

export function BookingSection() {
  return (
    <section className="bg-foreground py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-citrus">
            Ready to Start?
          </span>
          <h2 className="mt-4 font-heading text-3xl font-black uppercase text-white sm:text-5xl">
            Your Transformation
            <br />
            <span className="text-citrus">Begins Today</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/60">
            Schedule your 15-minute alignment call. Strictly strategy, no obligations.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CalButton variant="citrus" size="xl" className="group">
              Book Strategy Call
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CalButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-citrus" /> 15 minutes
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-citrus" /> No obligations
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-citrus" /> This week
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
