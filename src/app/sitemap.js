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
    "/most-effective-business-operating-systems-in-new-york",
    "/most-effective-business-operating-systems-in-los-angeles",
    "/most-effective-business-operating-systems-in-miami",
    "/most-effective-business-operating-systems-in-dubai",
    "/most-effective-business-operating-systems-in-romania",
    "/most-effective-business-operating-systems-in-minneapolis",
    "/most-effective-business-operating-systems-in-dallas",
    "/most-effective-business-operating-systems-in-houston",
    "/most-effective-business-operating-systems-in-chicago",
    "/most-effective-business-operating-systems-in-atlanta",
    "/most-effective-business-operating-systems-in-abu-dhabi",
    "/most-effective-business-operating-systems-in-doha",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
