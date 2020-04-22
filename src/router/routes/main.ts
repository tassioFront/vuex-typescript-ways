import Home from "@/views/Home.vue";
import directives from "./directives";
import todo from "./todo";
import hello from "./hello";
import user from "./user";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  { ...todo },
  { ...directives },
  { ...hello },
  { ...user }
];
