import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, Phone, Calendar, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — ELEVATE Fitness" },
      { name: "description", content: "Get in touch or book your strategy call. We're ready to help you transform your fitness." },
      { property: "og:title", content: "Contact — ELEVATE Fitness" },
      { property: "og:description", content: "Book your strategy call or send us an inquiry." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-warmgray py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl px-6 text-center lg:px-8"
          >
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
              Let's Talk
            </span>
            <h1 className="mt-4 font-heading text-4xl font-black uppercase text-foreground sm:text-5xl">
              Start Your <span className="text-citrus">Journey</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Fill out the form or book a call directly. No pressure, just a conversation about your goals.
            </p>
          </motion.div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground">Send an Inquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll get back to you within 24 hours.
              </p>

              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Work Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Primary Fitness Goal</label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-emerald/30"
                  >
                    <option value="">Select a goal...</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="strength">Strength & Muscle</option>
                    <option value="stress-relief">Stress Relief & Recovery</option>
                    <option value="energy">Energy & Performance</option>
                    <option value="general">General Fitness</option>
                  </select>
                </div>
                <Button variant="citrus" size="xl" className="w-full" type="submit">
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Direct Contact</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer to reach out directly? Here's how.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-lg hover:border-emerald/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "#25D366" }}>
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@elevate.fitness"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-lg hover:border-emerald/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-light">
                    <Mail className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@elevate.fitness</p>
                  </div>
                </a>

                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-lg hover:border-emerald/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-citrus/15">
                    <Phone className="h-6 w-6 text-citrus-hover" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </a>
              </div>

              {/* Calendar embed placeholder */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-emerald" />
                  <h3 className="font-heading text-lg font-bold text-foreground">Book a Call</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Schedule your 15-minute strategy call. No obligations.
                </p>
                <div className="mt-6 flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-border bg-warmgray">
                  <p className="text-sm text-muted-foreground">
                    [Calendly / Cal.com embed goes here]
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
