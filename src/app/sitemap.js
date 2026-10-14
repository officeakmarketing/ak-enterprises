export default function sitemap() {
  const baseUrl = "https://akenterprises.io";

  // Define core public routes
  const routes = [
    "",
    "/what-we-build",
    "/case-studies",
    "/aria",
    "/about",
    "/most-effective-business-operating-systems-in-the-uk",
    "/most-effective-business-operating-systems-in-london",
    "/most-effective-business-operating-systems-in-the-usa",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
