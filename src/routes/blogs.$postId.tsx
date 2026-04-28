import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, ChevronRight } from "lucide-react";
import { posts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blogs/$postId")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.id === params.postId);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title} — GRADIEN Blog` },
      { name: "description", content: loaderData?.post.excerpt || "" },
      { property: "og:title", content: loaderData?.post.title || "" },
      { property: "og:description", content: loaderData?.post.excerpt || "" },
      { property: "og:image", content: loaderData?.post.image || "" },
      { property: "og:type", content: "article" },
      { property: "article:author", content: loaderData?.post.author || "" },
      { property: "article:section", content: loaderData?.post.category || "" },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const { postId } = useParams({ from: "/blogs/$postId" });

  return (
    <>
      <Navbar />
      <main className="pt-[65px] min-h-screen bg-oatmeal">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto max-w-4xl px-6 pb-12 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/blogs"
                  className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-citrus transition-colors hover:text-[#D4AF37]"
                >
                  <ArrowLeft size={16} /> Back to Journal
                </Link>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-citrus">
                  <span className="rounded-full bg-citrus px-3 py-1 text-white">{post.category}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                </div>
                <h1 className="mt-4 font-heading text-4xl font-black uppercase leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  {post.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_250px]">
              {/* Article Content */}
              <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none text-muted-foreground"
              >
                {post.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Newsletter Signup in-article */}
                <div className="my-16 rounded-3xl bg-sage-muted p-8 lg:p-12 border border-citrus/10 shadow-sm">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4 uppercase">Join the Inner Circle</h3>
                    <p className="text-sm mb-6">Weekly evidence-based protocols on movement, mindset, and metabolic health. Delivered direct to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="executive@email.com" 
                            className="flex-1 rounded-xl border-border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-citrus"
                        />
                        <Button variant="citrus" className="text-white">Subscribe</Button>
                    </div>
                </div>
              </motion.article>

              {/* Sidebar */}
              <aside className="space-y-12">
                {/* Author Info */}
                <div className="rounded-2xl border border-border p-6 bg-beige-warm shadow-sm">
                  <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-citrus mb-4">About the Author</h4>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-citrus flex items-center justify-center font-bold text-white uppercase">
                        {post.author.charAt(0)}
                    </div>
                    <div>
                        <p className="text-sm font-bold text-foreground">{post.author}</p>
                        <p className="text-xs text-muted-foreground">GRADIEN Panel</p>
                    </div>
                  </div>
                </div>

                {/* Share/Meta */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    <Calendar size={14} /> {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                     <User size={14} /> Shared by GRADIEN
                  </div>
                </div>

                {/* Recent Posts Mini-list */}
                <div>
                   <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-citrus mb-6">Recent Articles</h4>
                   <div className="space-y-6">
                      {posts.filter(p => p.id !== postId).slice(0, 3).map(recent => (
                         <Link key={recent.id} to={`/blogs/${recent.id}`} className="group block">
                            <p className="text-xs font-bold text-citrus uppercase mb-1">{recent.category}</p>
                            <p className="text-sm font-bold text-foreground group-hover:text-citrus transition-colors line-clamp-2">
                                {recent.title}
                            </p>
                         </Link>
                      ))}
                   </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Next Post Footer CTA */}
        <section className="bg-warmgray py-20 border-t border-border mt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-citrus mb-4">Keep Reading</p>
                <h2 className="font-heading text-3xl font-black uppercase text-foreground mb-10">Expand Your <span className="text-citrus">Performance Toolkit</span></h2>
                <Button size="xl" variant="citrus" asChild>
                    <Link to="/blogs">Explore The Full Journal <ChevronRight size={18} className="ml-1" /></Link>
                </Button>
            </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
