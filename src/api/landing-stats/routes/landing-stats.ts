export default {
  routes: [
    { method: "GET", path: "/landing-stats", handler: "landing-stats.find" },
    { method: "PUT", path: "/landing-stats", handler: "landing-stats.update" },
    { method: "DELETE", path: "/landing-stats", handler: "landing-stats.delete" },
  ],
};
