export default {
  routes: [
    { method: "GET", path: "/landing-credit-card", handler: "landing-credit-card.find" },
    { method: "PUT", path: "/landing-credit-card", handler: "landing-credit-card.update" },
    { method: "DELETE", path: "/landing-credit-card", handler: "landing-credit-card.delete" },
  ],
};
