export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you", "/business-show", "/api/*"],
    },
    sitemap: "https://akenterprises.io/sitemap.xml",
  };
}
