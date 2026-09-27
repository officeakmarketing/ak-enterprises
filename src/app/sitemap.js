export default function sitemap() {
  const baseUrl = "https://akenterprises.io";

  // Define core public routes
  const routes = [
    "",
    "/what-we-build",
    "/case-studies",
    "/aria",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
