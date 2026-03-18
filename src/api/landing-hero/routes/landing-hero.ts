export default {
  routes: [
    { method: "GET", path: "/landing-hero", handler: "landing-hero.find" },
    { method: "PUT", path: "/landing-hero", handler: "landing-hero.update" },
    { method: "DELETE", path: "/landing-hero", handler: "landing-hero.delete" },
  ],
};
