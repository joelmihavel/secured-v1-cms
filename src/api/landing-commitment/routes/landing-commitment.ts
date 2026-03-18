export default {
  routes: [
    { method: "GET", path: "/landing-commitment", handler: "landing-commitment.find" },
    { method: "PUT", path: "/landing-commitment", handler: "landing-commitment.update" },
    { method: "DELETE", path: "/landing-commitment", handler: "landing-commitment.delete" },
  ],
};
