export default {
  routes: [
    { method: "GET", path: "/landing-download-app", handler: "landing-download-app.find" },
    { method: "PUT", path: "/landing-download-app", handler: "landing-download-app.update" },
    { method: "DELETE", path: "/landing-download-app", handler: "landing-download-app.delete" },
  ],
};
