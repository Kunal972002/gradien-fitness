import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalButton } from "@/components/CalButton";
import { ArrowRight, CheckCircle2, ArrowLeft, MessageCircle, Quote } from "lucide-react";
import { getServiceBySlug, serviceDetails } from "@/data/serviceDetails";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title} ${loaderData?.service.titleAccent} — GRADIEN` },
      {
        name: "description",
        content: loaderData?.service.heroDescription.slice(0, 155) + "…",
      },
      { property: "og:title", content: `${loaderData?.service.title} ${loaderData?.service.titleAccent} — GRADIEN` },
      { property: "og:description", content: loaderData?.service.heroDescription.slice(0, 155) + "…" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServiceDetailPage,
  notFoundComponent: () => {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-24">
          <div className="max-w-md text-center">
            <h1 className="text-7xl font-bold text-foreground">404</h1>
            <h2 className="mt-4 text-xl font-semibold text-foreground">
              Service not found
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The service you're looking for doesn't exist.
            </p>
            <div className="mt-6">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md bg-emerald px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald/90"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  },
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();

  // Find adjacent services for navigation
  const currentIndex = serviceDetails.findIndex((s) => s.slug === service.slug);
  const prevService = currentIndex > 0 ? serviceDetails[currentIndex - 1] : null;
  const nextService =
    currentIndex < serviceDetails.length - 1 ? serviceDetails[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="bg-background pt-[65px]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-warmgray py-20 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(16,185,129,0.08)_0%,transparent_100%)]" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.iconBg}`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <span className="mt-6 inline-block font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                  {service.label}
                </span>
                <h1 className="mt-3 font-heading text-4xl font-black uppercase leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  {service.title}
                  <br />
                  <span className="text-citrus">{service.titleAccent}</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {service.heroDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <CalButton calType="consultation" variant="citrus" size="xl" className="group">
                    Book a Free Consultation
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </CalButton>
                  <Button
                    variant="outline"
                    size="xl"
                    asChild
                    className="border-foreground/20 hover:bg-foreground hover:text-white"
                  >
                    <a href="https://wa.me/919028634445" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Pull Quote Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-3xl bg-foreground p-10 shadow-2xl lg:p-12">
                  <Quote className="h-10 w-10 text-citrus/40" />
                  <p className="mt-6 text-lg font-medium italic leading-relaxed text-white/90">
                    "{service.pullQuote.text}"
                  </p>
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="font-heading text-sm font-bold text-white">
                      {service.pullQuote.author}
                    </p>
                    <p className="mt-1 text-xs text-white/50">{service.pullQuote.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                How It Works
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black uppercase text-foreground sm:text-4xl">
                What's <span className="text-citrus">Included</span>
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-all duration-300 hover:shadow-xl hover:ring-emerald/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-citrus/15">
                      <CheckCircle2 className="h-5 w-5 text-citrus" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect (FAQ) */}
        <section className="bg-warmgray py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
                Common Questions
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black uppercase text-foreground sm:text-4xl">
                What to <span className="text-citrus">Expect</span>
              </h2>
            </motion.div>

            <div className="mt-14 space-y-6">
              {service.whatToExpect.map((item, i) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-6 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald to-emerald/80 p-8 sm:p-10"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
              <div className="absolute -right-4 bottom-0 h-20 w-20 rounded-full bg-white/5" />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Not sure which pillar is right for you?
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-white/80">
                    Every membership includes all three pillars. Book a call and we'll walk you through how they work together.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="xl"
                  asChild
                  className="shrink-0 border-white/40 bg-white text-emerald font-bold hover:bg-white/90 hover:text-emerald"
                >
                  <Link to="/contact">
                    Talk to Us
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigate to Other Pillars */}
        {(prevService || nextService) && (
          <section className="py-16 bg-background">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald text-center mb-10">
                Explore Other Pillars
              </h3>
              <div className={`grid gap-6 ${prevService && nextService ? "sm:grid-cols-2" : ""}`}>
                {prevService && (
                  <Link
                    to="/services/$slug"
                    params={{ slug: prevService.slug }}
                    className="group flex items-center gap-5 rounded-2xl bg-card p-6 ring-1 ring-border transition-all duration-300 hover:shadow-xl hover:ring-emerald/30"
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${prevService.iconBg}`}>
                      <prevService.icon className={`h-6 w-6 ${prevService.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        ← Previous Pillar
                      </p>
                      <p className="mt-1 font-heading text-lg font-bold text-foreground group-hover:text-emerald transition-colors">
                        {prevService.title} {prevService.titleAccent}
                      </p>
                    </div>
                  </Link>
                )}
                {nextService && (
                  <Link
                    to="/services/$slug"
                    params={{ slug: nextService.slug }}
                    className="group flex items-center gap-5 rounded-2xl bg-card p-6 ring-1 ring-border transition-all duration-300 hover:shadow-xl hover:ring-emerald/30 sm:text-right sm:flex-row-reverse"
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${nextService.iconBg}`}>
                      <nextService.icon className={`h-6 w-6 ${nextService.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Next Pillar →
                      </p>
                      <p className="mt-1 font-heading text-lg font-bold text-foreground group-hover:text-emerald transition-colors">
                        {nextService.title} {nextService.titleAccent}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}

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
              {service.ctaHeadline}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              {service.ctaDescription}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="citrus" size="xl" asChild className="group w-full sm:w-auto">
                <Link to="/contact">
                  Book Your Free Call
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
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
