import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));
router.setRoutes([
  { path: "/", component: "home-comp" },
  { path: "/home", component: "home-comp" },
  { path: "/chat", component: "chat-comp" },
]);
