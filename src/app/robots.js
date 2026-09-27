export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you", "/businessshow", "/api/*"],
    },
    sitemap: "https://akenterprises.io/sitemap.xml",
  };
}
