import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/blogPosts";

const categoryColors: Record<string, string> = {
  Nutrition: "bg-emerald-light text-[#1A3626]",
  Workouts: "bg-citrus/20 text-citrus",
  Mindset: "bg-muted text-foreground",
  Recovery: "bg-emerald-light text-[#1A3626]",
};

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blog — ELEVATE Fitness Insights" },
      { name: "description", content: "Expert articles on nutrition, workouts, mindset, and recovery for busy professional women." },
      { property: "og:title", content: "Blog — ELEVATE Fitness" },
      { property: "og:description", content: "Fitness insights for women who lead." },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
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
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-citrus">
              The ELEVATE Journal
            </span>
            <h1 className="mt-4 font-heading text-4xl font-black uppercase text-foreground sm:text-5xl">
              Insights & <span className="text-citrus">Articles</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Science-backed articles on training, nutrition, and mindset for high-performing women.
            </p>
          </motion.div>
        </section>

        <section className="bg-oatmeal py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  <Link to={`/blogs/${post.id}`} className="absolute inset-0 z-10" />
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${categoryColors[post.category] || "bg-muted text-foreground"}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold leading-tight text-foreground group-hover:text-citrus transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-citrus">
                      Read More <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

