import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://kisimasafaris.com";
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: "",
      changefreq: "weekly",
      priority: "1.0",
      lastmod: currentDate,
    },
    {
      url: "/about",
      changefreq: "monthly",
      priority: "0.8",
      lastmod: currentDate,
    },
    {
      url: "/destinations",
      changefreq: "weekly",
      priority: "0.9",
      lastmod: currentDate,
    },
    {
      url: "/services",
      changefreq: "weekly",
      priority: "0.9",
      lastmod: currentDate,
    },
    {
      url: "/contact",
      changefreq: "monthly",
      priority: "0.7",
      lastmod: currentDate,
    },
    {
      url: "/privacy",
      changefreq: "yearly",
      priority: "0.3",
      lastmod: currentDate,
    },
    {
      url: "/terms",
      changefreq: "yearly",
      priority: "0.3",
      lastmod: currentDate,
    },
  ];

  // Destination pages
  const destinations = [
    "maasai-mara",
    "mount-kenya",
    "kilimanjaro",
    "amboseli",
    "samburu",
    "coastal-beaches",
    "lake-nakuru",
    "tsavo",
  ];

  const destinationPages = destinations.map((slug) => ({
    url: `/destinations/${slug}`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: currentDate,
  }));

  // Service pages
  const services = [
    "wildlife-safaris",
    "mountain-climbing",
    "honeymoon-tours",
    "family-packages",
    "cultural-tours",
    "photography-safaris",
  ];

  const servicePages = services.map((slug) => ({
    url: `/services/${slug}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: currentDate,
  }));

  // Combine all pages
  const allPages = [...staticPages, ...destinationPages, ...servicePages];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
