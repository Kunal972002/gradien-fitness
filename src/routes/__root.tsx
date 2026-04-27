import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ELEVATE — Premium Fitness for Female Executives" },
      { name: "description", content: "High-performance fitness and wellness engineered for female executives. Expert coaching, strategic nutrition, and a private community. Join 500+ members." },
      { name: "author", content: "ELEVATE Fitness" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#1A3626" },
      { name: "keywords", content: "female executive fitness, women's wellness, premium personal training, executive coaching, nutrition strategy, corporate wellness" },
      { property: "og:title", content: "ELEVATE — Premium Fitness for Female Executives" },
      { property: "og:description", content: "High-performance fitness and wellness engineered for female executives. Expert coaching, strategic nutrition, and a private community." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ELEVATE Fitness" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ELEVATEFitness" },
      { name: "twitter:title", content: "ELEVATE — Premium Fitness for Female Executives" },
      { name: "twitter:description", content: "High-performance fitness and wellness engineered for female executives. Expert coaching, strategic nutrition, and a private community." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "sitemap",
        type: "application/xml",
        href: "/sitemap.xml",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "ELEVATE Fitness",
    "description": "High-performance fitness and wellness engineered for female executives. Expert coaching, strategic nutrition, and a private community.",
    "url": "https://elevate.fitness",
    "logo": "https://elevate.fitness/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@elevate.fitness",
    },
    "sameAs": [
      "https://instagram.com/elevatefitness",
      "https://youtube.com/@elevatefitness",
      "https://twitter.com/ELEVATEFitness",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ELEVATE Fitness",
    "url": "https://elevate.fitness",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://elevate.fitness/blogs?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
