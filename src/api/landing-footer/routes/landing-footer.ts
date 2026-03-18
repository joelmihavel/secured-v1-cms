export default {
  routes: [
    { method: "GET", path: "/landing-footer", handler: "landing-footer.find" },
    { method: "PUT", path: "/landing-footer", handler: "landing-footer.update" },
    { method: "DELETE", path: "/landing-footer", handler: "landing-footer.delete" },
  ],
};
