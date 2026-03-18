export default {
  routes: [
    { method: "GET", path: "/landing-getting-started", handler: "landing-getting-started.find" },
    { method: "PUT", path: "/landing-getting-started", handler: "landing-getting-started.update" },
    { method: "DELETE", path: "/landing-getting-started", handler: "landing-getting-started.delete" },
  ],
};
